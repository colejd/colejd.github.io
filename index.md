---
layout: home
title: Hi, I'm Jon.
---

<style>
.emoji-bullet::before {
    top: unset !important;
    background-color: unset !important;
}

.emoji-bullet-pizza::before {
    content: "🍕" !important;
}

.emoji-bullet-film-reel::before {
    content: "📽️" !important;
}

.emoji-bullet-sunglasses::before {
    content: "🕶️" !important;
}

.emoji-bullet-car::before {
    content: "🚙" !important;
}

.emoji-bullet-signpost::before {
    content: "🚏" !important;
}

.emoji-bullet-light-bulb::before {
    content: "💡" !important;
}

.emoji-bullet-robot::before {
    content: "🤖" !important;
}
</style>

<div class="flex flex-row" style="margin-bottom: 0.8888889em;">
    <div class="flex flex-col">
        <h1 class="" style="margin-bottom: 0;">Hi, I'm Jon.</h1>
        <span>
        <a href="{{- site.github_url -}}">Github</a>   •   <a href="{{- '/resume' | relative_url -}}">Resume</a>
        </span>
    </div>
    <div class="ml-4">
        <img class="h-16 md:h-12 lg:h-20" style="width:auto;margin-top:0;margin-bottom:0;" data-src="/assets/images/posterized_compressed.png" alt="Jon's face.">
    </div>
</div>

I'm a software developer living in Boston, where I help build world-class iOS and augmented reality apps as a Senior Developer at Raizlabs (now [Rightpoint](https://www.rightpoint.com/)). Before that, I was part of the [Virtual Environment and Multimodal Interaction Laboratory](https://umaine.edu/vemi/), where I worked at the forefront of human-computer interaction and psychospatial research with VR and AR. I'm skilled with iOS, AR, VR, and computer vision.

<p class="no-bottom-margin">
I like hard problems, and I've worked on a lot of them. Some of them include:
</p>
<ul>
<li class="emoji-bullet emoji-bullet-pizza"><a href="/apps/liquid-math">A Metal-powered Reaction-Diffusion simulator for iOS and macOS</a></li>
<li class="emoji-bullet emoji-bullet-film-reel"><a href="https://github.com/colejd/waldorf">A full-stack video annotation solution for preserving and categorizing historical footage</a></li>
<li class="emoji-bullet emoji-bullet-sunglasses"><a href="https://github.com/colejd/kino">Software and hardware that helps researchers use AR to study perception and aging</a></li>
<li class="emoji-bullet emoji-bullet-car"><a href="https://cugr.umaine.edu/wp-content/uploads/sites/146/2013/04/2013_CUGR-ShowcaseAbstracts1.pdf">A fully-immersive VR driving simulator for studying compensatory augmented reality</a>, complete with a real car seat</li>
<li class="emoji-bullet emoji-bullet-signpost">An iOS app that helps blind and low-vision people find bus stops with Bluetooth ranging</li>
<li class="emoji-bullet emoji-bullet-light-bulb">The next generation of smart lighting for iOS</li>
<li class="emoji-bullet emoji-bullet-robot">An occupancy grid vectorizer and visualizer for cleaning robots</li>
</ul>

That's just a surface look at my work, a lot of which is open-source on [Github]({{- site.github_url -}}). If you're interested, you can see more about me on my [resume](/resume), or [get in touch via email](mailto:{{- site.email -}}).