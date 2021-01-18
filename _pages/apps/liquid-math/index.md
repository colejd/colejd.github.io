---
title: Liquid Math
subtitle: Morphogenesis on the go
description: An interactive reaction-diffusion simulator for iOS and macOS. Built with Swift and Metal.
layout: page
permalink: /apps/liquid-math/
cover-image: preview.png
---

{% assign _images = "images/screenshot-1.png, images/screenshot-2.png, images/screenshot-3.png, images/screenshot-4.png, images/screenshot-5.png" | split: ", " %}

{% comment %}
{% assign _content_directory = page.url | append:"/images/" %}
{% endcomment %}

{% include widgets/carousel.html images=_images %}

<div style="text-align:center; margin-top:2rem; margin-bottom: 1rem; padding-top: 1rem;">
    <a href="https://itunes.apple.com/us/app/liquid-math/id1331320224?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:135px;height:40px;background-size:contain;"></a>
    <a href="https://geo.itunes.apple.com/us/app/morpho/id1280150140?mt=12" style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/en-us/macappstore-lrg.svg) no-repeat;width:165px;height:40px;background-size:contain;"></a>
</div>

Liquid Math is an interactive simulator for reaction-diffusion systems. Think of it like a sort of lava lamp that you control the behavior of. Or think of it as a drawing program that brings your brush strokes to life. Or think of it as an educational tool for linear algebra. It's up to you.

To learn a little more, and to try out something similar, try out the prototype web version [here](/projects/reaction-diffusion/).

**Features**:
- Explore 25 styles of reaction-diffusion
- Make your own styles. The mathematical models are completely customizable.
- Learn more about the mathematical models powering Morpho.
- Change the look with the alternate color themes.

**Requires iOS 11.0 / macOS High Sierra or later.**


<h2>Privacy Policy</h2>
Neither I nor Morpho / Liquid Math collect or retain any data at this time. If you have analytics turned on in iOS, Apple will collect basic, non-identifying information and logs from your device and send them to me in the event of a crash so that I can fix it. By using this app, you agree to this data collection.