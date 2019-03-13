---
title: "OpenCV, InputArray, OutputArray, and You"
subtitle: "Improve your code with *one easy trick!*"
author: Jon
layout: post
# cover-photo: /assets/posts/randomizing-uicolor-with-swizzling/preview-small.png
# cover-photo-alt: A screenshot of Slide for Reddit with all colors randomized
---

When you're writing OpenCV code in C++, you'll eventually want to pass whatever `Mat` objects you have into a function or a class method. For the purposes of this post, let's say we want to write a utility function that prepares a BGR888 `Mat` for edge detection. This typically involves converting the image to grayscale, as well as blurring it to remove superficial details.

It's tempting to write the following function signature:

<div class="code-snippet">
{% highlight cpp linenos %}
// Revision 1
Mat preprocess(const Mat& input) {
	Mat gray, output;
	cvtColor(input, gray, COLOR_BGR2GRAY);
  blur(gray, output, Size(3, 3));
  return output;
}
{% endhighlight %}
</div>

This is good C++ code; we pass a reference to the input `Mat` so that we don't incur a copy, and we use `const` to mark the reference as read-only. However, OpenCV provides some utilities that we can use to improve this function.

`Mat` is not the only container for representing an image in OpenCV. If you're looking to leverage OpenCV's [Transparent API](https://www.learnopencv.com/opencv-transparent-api/) for GPU acceleration, you'll want to use `UMat` as your container instead. If you have an existing codebase full of utility functions written like above, you're going to have to make copies that take a `UMat` reference if you want to use those.

Fortunately, OpenCV foresaw this issue, and so it provides the [`InputArray`](https://docs.opencv.org/4.0.1/d4/d32/classcv_1_1__InputArray.html#details) proxy class. As per the docs, `InputArray` lets you pass in a `Mat`, `UMat`, or even a `std::vector`, among others.

Here's what our function looks like using `InputArray`:

<div class="code-snippet">
{% highlight cpp linenos %}
// Revision 2
Mat preprocess(InputArray input) {
	Mat gray, output;
	cvtColor(input, gray, COLOR_BGR2GRAY);
	blur(gray, output, Size(3, 3));
  return output;
}
{% endhighlight %}
</div>

Note that we aren't passing a reference to `input`. `Mat` and `UMat` are internally backed by smart pointers, so we don't need to worry about getting a reference or a pointer or even managing the memory of the image itself! Using `InputArray` also has the nice benefit of making your image read-only as far as the OpenCV SDK is concerned, which helps the compiler find issues and makes your code easier to read.

Similarly, OpenCV provides a proxy class called [`OutputArray`](https://docs.opencv.org/4.0.1/d2/d9e/classcv_1_1__OutputArray.html#details), which wraps the same types but is treated as write-only. Here's the function rewritten with that:

<div class="code-snippet">
{% highlight cpp linenos %}
// Revision 3
void preprocess(InputArray input, OutputArray output) {
	Mat gray;
	cvtColor(input, gray, COLOR_BGR2GRAY);
	blur(gray, output, Size(3, 3));
}
{% endhighlight %}
</div>

Now instead of returning a new `Mat` object, whatever we pass into `output` will be written to.

Why would we want to do this? Well, when you're writing computer vision code, you need to be careful about how your image data is being passed around. After all, the images you're passing around are uncompressed; a 4000x4000 image in BGR888 format would take around 48 megabytes of space in RAM. That's not a lot, but it adds up fast, particularly if you're parallelizing or running on a mobile platform. If we gave that image to Revision 2 of the `preprocess()` function, we would be allocating two copies of the image; one temporary (`gray`) and one that we keep and return ( `output`).

With Revision 3, we've moved the decision to allocate the output from inside of the function to wherever it gets called. If you want a copy, call `preprocess(someMat, someOtherMat)`. If you want to overwrite the original `Mat`, just call `preprocess(someMat, someMat)`, using the same object for the input and the output. If you've wondered why so many of OpenCV's functions write outputs to an `OutputArray` parameter instead of returning a `Mat`, this is why!

Now let's say we /always/ want `preprocess` to operate in-place. We can make use of OpenCV's `InputOutputArray` to completely avoid allocating new images in `preprocess` and make the function a little easier to read:

<div class="code-snippet">
{% highlight cpp linenos %}
// Revision 4
void preprocess(InputOutputArray input) {
	cvtColor(input, input, COLOR_BGR2GRAY);
	blur(input, input, Size(3, 3));
}
{% endhighlight %}
</div>

Easy.

As a footnote, you might be wondering to yourself, "Why not just avoid all of this and use `UMat` everywhere?" The simple answer is that OpenCV functions that consume a `UMat` will run on the GPU if it can, falling back on the CPU if not. If you pass a `Mat`, it will always run on the CPU. Sometimes you'll want to explicitly force an algorithm to run on the CPU (or bail on using `UMat` when you run into some platform-specific bug), so having the ability to quickly switch between the two will save you a lot of time.

## Optional outputs with `InputArray` and `OutputArray`
A nice trick you can do with `InputArray` is making parameters optional. Let's suppose we want to write a function that takes a `Mat` and a mask (also a `Mat`):

<div class="code-snippet">
{% highlight cpp linenos %}
void someFunction(InputArray input, OutputArray output, InputArray mask) {
	// 1. Use the mask on the input
  // 2. Write something into the output
}
{% endhighlight %}
</div>

Masks in OpenCV's own functions are typically optional; that is, you can pass in `noArray()` and no masking operation will take place. We can do that in our function as well:

<div class="code-snippet">
{% highlight cpp linenos %}
void someFunction(InputArray input, OutputArray output, InputArray mask = noArray()) {
	if (!mask.empty()) {
		// 1. Use the mask on the input
	}
  // 2. Write something into the output
}
{% endhighlight %}
</div>

This is a trivial detail, but writing the function this way makes it so that if you don't want a mask, you can just omit the parameter entirely instead of writing in `noArray()` yourself.

A more interesting case is the ability to make an `OutputArray` optional. Let's suppose we're writing a function that tells us how many closed edges it could find in an image (and for good measure, let's use Revision 3 of the `preprocess` function we wrote earlier):

<div class="code-snippet">
{% highlight cpp linenos %}
int getNumberOfClosedEdges(InputArray input) {
	Mat processed, edges;
	preprocess(input, processed);
	Canny(processed, edges, 100, 170, 3);
	// Imaginary function that returns the number 
	// of closed edges in `edges`
	return numberOfClosedEdges(edges);
}
{% endhighlight %}
</div>

All we care about when we're using this function is the number of closed edges. However, you can use the result of the Canny edge detection (`edges`) for visualization purposes or other processing tasks later on, so wouldn't it be nice if we could optionally choose to keep it?

`OutputArray` has a read-only `needed()` property, which returns `false` if its backing object is a `noArray()` instance. Let's use that with our function:

<div class="code-snippet">
{% highlight cpp linenos %}
int getNumberOfClosedEdges(InputArray input, OutputArray outputEdges = noArray()) {
	Mat processed, edges;
	preprocess(input, processed);
	Canny(processed, edges, 100, 170, 3);

	if (outputEdges.needed()) {
		edges.copyTo(outputEdges);
	}

	// Imaginary function that returns the number 
	// of closed edges in `edges`
	return numberOfClosedEdges(edges);
}
{% endhighlight %}
</div>

Now we have an optional parameter to write the Canny results into if we want them. This technique is particularly useful for cases where you have an image processing pipeline with several steps and you want to store intermediates for visualization or debugging.

## Links
* [Coding_Style_Guide · opencv/opencv Wiki · GitHub](https://github.com/opencv/opencv/wiki/Coding_Style_Guide)
* [InputArray - OpenCV Docs](https://docs.opencv.org/4.0.1/d4/d32/classcv_1_1__InputArray.html#details)
* [OutputArray - OpenCV Docs](https://docs.opencv.org/4.0.1/d2/d9e/classcv_1_1__OutputArray.html#details)