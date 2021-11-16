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
    margin-top: 3rem;
    margin-bottom: 2rem;
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
    color: black;
}

.guify-bar-button {
    padding-left: 5px;
    padding-right: 5px;
}
</style>


<div id="guify-container" class="project-container break-aspect-on-mobile">
    <div id="guify-container-content">
        <div id="content-text">
            [content]
        </div>
    </div>
</div>

<script src="https://unpkg.com/guify@0.14.2/lib/guify.min.js"></script>
<script src="/assets/js/guify/index.js"></script>

<div class="flex flex-col w-full space-y-1" style="margin-bottom: 2rem;">
    <!--
    <div class="flex flex-row justify-center space-x-2">
        <span>Themes:</span>
        <a href="javascript:void(0);" class="underline" onClick="onThemeChange('light')">Light</a>
        <a href="javascript:void(0);" class="underline" onClick="onThemeChange('dark')">Dark</a>
        <a href="javascript:void(0);" class="underline" onClick="onThemeChange('yorha')">YoRHa</a>
    </div>
    <div class="flex flex-row justify-center space-x-2">
        <span>Menu Bar:</span>
        <a href="javascript:void(0);" class="underline" onClick="onBarmodeChange('above')">Enable</a>
        <a href="javascript:void(0);" class="underline" onClick="onBarmodeChange('none')">Disable</a>
    </div>
    -->
    <div class="flex flex-row justify-center space-x-2">
        <a href="https://github.com/colejd/guify">View Source on GitHub</a>
    </div>
</div>

<a href="https://github.com/colejd/guify">Guify</a> is a GUI system you can use in your JavaScript projects to modify variables and trigger actions. I initially used <a href="https://github.com/dataarts/dat.gui">dat.GUI</a> while working on the other JavaScript projects on this website, but I needed functionality it didn't have, and I wanted something more suited to my needs.

Guify is my solution. It's an opinionated take on UI that's designed to be easily graftable onto any website. It's ideal for <a href="https://p5js.org/">p5.js</a> projects and toys, but it'll work on anything; in fact, <a href="/projects/">all of the JS projects on this website</a> use it. It has also been <a href="https://github.com/dbismut/react-guify">ported to React</a>.

Here's all you need to do to get started in your HTML:

```html
<script src="https://unpkg.com/guify@0.14.2/lib/guify.min.js"></script>

<script>
    var gui = new guify({
        title: 'My App',
    });

    var someNumber = 0;
    gui.Register({
        type: 'range',
        label: 'Some Number',
        min: 0, max: 10,
        object: this, property: "someNumber",
        onChange: (data) => {
            console.log(someNumber);
        }
    });
</script>
```

You can find more information on the <a href="https://github.com/colejd/guify">GitHub repo</a>, and you can get the latest version yourself as an <a href="https://www.npmjs.com/package/guify">NPM package</a> or for browser embedding through a CDN at <a href="https://unpkg.com/guify">unpkg.com/guify</a>.