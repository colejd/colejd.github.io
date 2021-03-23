---
template: project-page
slug: /projects/guify
title: Guify
subtitle: A flexible, simple GUI for your JavaScript projects
description: A flexible, simple GUI for your JavaScript projects.
layout: project-page
order: 2
coverPhoto: preview.png
coverPhotoAlt: ""
excerpt: Guify is a GUI system you can use in your JavaScript projects to modify variables and trigger actions. I initially used dat.GUI while working on the other JavaScript projects on this website, but I was frustrated with its limitations and wanted something better. Guify is my solution.
---

<!--
                                                                        ///\\\\
                                               --_                    //       \\
                                                \ \                ///           \\
                                                \  \             //       ///\\    \
                          --___   //////\\\\    |   \         ///       //     \   \
                          \    ///          \\\\\\\ |       //        //       \    \
                           \///                    \\\\\\\///        /          \    \
                          //                                        /            \   \
                         /                                         /             \    \
                       //                                        //              \    \
                     //                                         /                 \   \
                    /                            /     \      //                  \   \
                  //                  \          \     /    //                    \   /
                 /                    /           \    /   /                      /   /
                /     ///\\\\\  \     /           |    |///                       /   /
              //    //        \\|    /\\\       ///    /                         /    /
             /    //            /    /   \\\\/// /    /                          /    /
            /   //              /    /           /   /                          /    /
            /   /              /   _/           /  _/                           /    /
            /   /              /  /            /__/                            /    /
            \   \             /__/                                            /    /
             \  \                                                           _/    /
              \  \                                                       __/     /
               \  \                                                  ___/       /
               \  \_                                           __---/       ___/
                \   ---_____                             __---/          __/
                 \______-----                           /        _____---
                                                       /     ___/
                                                      /     /
                                                      |  O  \
                                                      /    /|
                                                      /   / /
                                                      /  / /
                                                      |m/\_/
-->

<style>
.project-container {
    margin-top: 4rem;
}
#guify-container-content {
    background-color: rgb(255, 255, 230);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#content-text {
    font-family: monospace;
}
</style>


<div id="guify-container" class="project-container break-aspect-on-mobile">
    <div id="guify-container-content">
        <div id="content-text">
            [content]
        </div>
    </div>
</div>

<script src="https://unpkg.com/guify/lib/guify.min.js"></script>
<script src="/assets/js/guify/index.js"></script>

<div class="flex flex-col w-full space-y-1" style="margin-bottom: 1.5em;">
    <div class="flex flex-row justify-center space-x-2">
        <span>Themes:</span>
        <a href="javascript:void(0);" class="underline" onclick="onThemeChange('light');">Light</a>
        <a href="javascript:void(0);" class="underline" onclick="onThemeChange('dark');">Dark</a>
        <a href="javascript:void(0);" class="underline" onclick="onThemeChange('yorha');">YoRHa</a>
    </div>
    <div class="flex flex-row justify-center space-x-2">
        <span>Menu Bar:</span>
        <a href="javascript:void(0);" class="underline" onclick="onBarmodeChange('above');">Enable</a>
        <a href="javascript:void(0);" class="underline" onclick="onBarmodeChange('none');">Disable</a>
    </div>
</div>

Guify is a GUI system you can use in your JavaScript projects to modify variables and trigger actions. I initially used <a href="https://workshop.chromeexperiments.com/examples/gui">dat.GUI</a> while working on the other JavaScript projects on this website, but I was frustrated with its limitations and wanted something better.

Guify is my solution. It's easy to use on mobile, easy to customize visually and functionally, and it's built with accessibility in mind.

You can find more information on the <a href="https://github.com/colejd/guify">GitHub repo</a>, and you can get the latest version yourself as an <a href="https://www.npmjs.com/package/guify">NPM package</a> or for browser embedding through a CDN at <a href="https://unpkg.com/guify">unpkg.com/guify</a>.