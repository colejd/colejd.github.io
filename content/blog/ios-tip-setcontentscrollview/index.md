---
slug: "/blog/ios-tip-setcontentscrollview"
template: blog-post
title: "How to make the navbar title automatically change from largeTitle to inline in UIKit for iOS"
subtitle: "Of course it's undocumented."
description: "Of course it's undocumented."
author: Jon
layout: post
date: 2022-07-29
keywords: setcontentscrollview ios uikit largetitle title navbar navigation software programming development
draft: true
---

In SwiftUI, you can set a navigation bar to have a large title when you are at the top of a scroll view, which minimizes to a smaller inline style when you scroll down. You can get this behavior in UIKit as well, but it's a bit tricky.
<!--more-->

First, you need to set `prefersLargeTitles` to `true` to allow your title to be presented large.
```swift{numberLines: false}
class SomeViewController: UIViewController {
    let scrollView = UIScrollView()

    func viewDidLoad() {
        view.addSubview(scrollView)
        navigationController?.navigationBar.prefersLargeTitles = true
    }
}
```

On iOS 14 and below, your work is done! iOS itself will look for a UIScrollView to watch, and then handle the transition for you when the user scrolls. On iOS 15, however, it won't find the UIScrollView automatically. You'll need tell your ViewController which one to watch yourself:

```swift{numberLines: false}{7-9}
class SomeViewController: UIViewController {
    let scrollView = UIScrollView()

    func viewDidLoad() {
        view.addSubview(scrollView)
        navigationController?.navigationBar.prefersLargeTitles = true
        if #available(iOS 15.0, *) {
            setContentScrollView(scrollView)
        }
    }
}
```

If this behavior was working on iOS 14 and it suddenly stopped working on iOS 15, this is why. Naturally, this method is [undocumented](https://developer.apple.com/documentation/uikit/uiviewcontroller/3816781-setcontentscrollview).
