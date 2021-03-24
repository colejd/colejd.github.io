---
template: project-page
slug: /projects/reaction-diffusion
title: Reaction-Diffusion Simulator
subtitle: Mobile morphogenesis
description: Reaction-diffusion simulator for WebGL.
layout: project-page
order: 1
coverPhoto: preview.png
coverPhotoAlt: ""
excerpt: This project is a GPGPU simulation of a Gray-Scott Reaction-Diffusion system. Reaction-Diffusion systems have many interesting properties, and can be used to model various biological, chemical, and ecological processes.
scripts:
  [
    "https://unpkg.com/guify/lib/guify.min.js",
    "/assets/js/reaction-diffusion/reaction-diffusion.min.js",
  ]
---

<!--
                                            O_
                                           /  >
                                          -  >   ^\
                                         /   >  ^ /
                                        (O)  > ^ /   / / /
           _____                        |       /    \\|//
          /  __ \                      _/      /     / _/
         /  /  | |                    /       /     / /
       _/  |___/ /                  _/      ------_/ /
     ==_|  \____/                 _/       /  ______/
         \   \                 __/           |\
          |   \_          ____/              / \      _
           \    \________/                  |\  \----/_V
            \_                              / \_______ V
              \__                /       \ /          V
                 \               \        \
                  \______         \_       \
                         \__________\_      \
                            /    /    \_    |
                           |   _/       \   |
                          /  _/          \  |
                         |  /            |  |
                         \  \__          |   \__
                         /\____=\       /\_____=\
-->

<style>
#reaction-diffusion-container {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin-top: 3.0em;
}
</style>

<p style="color:red; text-align: center;">
Epilepsy Warning: Some settings can cause bright flashing.
</p>

<div id="reaction-diffusion-container" class="project-container break-aspect-on-mobile shadow-2xl" seed-frequency="4.0" steps-per-iteration="8"></div>

<p style="text-align: center; margin-bottom: 1em;"><em>Press and drag to draw.</em></p>

This project is a GPGPU simulation of a [Gray-Scott](http://mrob.com/pub/comp/xmorphia/) Reaction-Diffusion system. Reaction-Diffusion systems have many interesting properties, and can be used to model various biological, chemical, and ecological processes.

Here, many of the presets you can try develop in a way similar to the formation of skin pigments in spotted or striped animals. [More reading here](https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system).

The code for this project is available on [Github](https://github.com/colejd/Reaction-Diffusion-ThreeJS).

I expanded this project significantly into an app for iOS and macOS. Have a look [here](/apps/liquid-math) if you're interested.

\*\*\_Note: This will run at half precision on iOS due to browser limitations, so some of the
