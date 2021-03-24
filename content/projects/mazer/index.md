---
template: project-page
slug: /projects/mazer
title: Mazer
subtitle: An exploration of algorithms for generating and solving mazes
description: An interactive visualizer for maze generators and solvers.
layout: project-page
order: 5
coverPhoto: preview.png
coverPhotoAlt: ""
excerpt: This is a little program that generates and solves various types of mazes.
scripts:
  [
    "https://unpkg.com/guify/lib/guify.min.js",
    "/assets/js/mazer/mazer.min.js",
  ]
---

<!--
                                       <\              _
                                        \\          _/{
                                 _       \\       _-   -_
                               /{        / `\   _-     - -_
                             _~  =      ( @  \ -        -  -_
                           _- -   ~-_   \( =\ \           -  -_
                         _~  -       ~_ | 1 :\ \      _-~-_ -  -_
                       _-   -          ~  |V: \ \  _-~     ~-_-  -_
                    _-~   -            /  | :  \ \            ~-_- -_
                 _-~    -   _.._      {   | : _-``               ~- _-_
              _-~   -__..--~    ~-_  {   : \:}
            =~__.--~~              ~-_\  :  /
                                       \ : /__
                                       /`Y'--\\
                                     <+       \\
                                      \\      WWW
-->

<div id="mazer-container" class="project-container" style="margin-top: 4rem; margin-bottom: 2rem;"></div>

<div markdown="1" class="prose lg:prose-xl">
This is a little program that generates and solves various types of mazes. I will be revisiting this in the future when I have more time, with more maze shapes and generation algorithms.

While developing this, I found myself in need of a better UI system, so I made <a href="https://github.com/colejd/guify">Guify</a>, which you see here. You can get it on <a href="https://www.npmjs.com/package/guify">npm</a> if you want to use it in your own projects!
</div>
