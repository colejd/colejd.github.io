---
template: project-page
slug: /projects/jon-trombone
title: Jon-Trombone
subtitle: A tragic monument to vanity
description: What happens when you have a 3D scanner and too much free time?
layout: project-page
order: 3
coverPhoto: preview.png
coverPhotoAlt: ""
excerpt: This is what happens when you have a 3D scanner and too much free time. Above is a 3D scan of my head rigged for animation and hooked up to a modified version of Pink Trombone, which simulates the nose and throat to produce synthesized human vocals.
scripts:
  [
    "https://unpkg.com/guify/lib/guify.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js",
    "/assets/js/jon-trombone/dependencies/OrbitControls.js",
    "/assets/js/jon-trombone/jon-trombone.js",
  ]
---

<!--
        ~
           .-~~^-.
         .'  O    \
        (_____,    \
         `----.     \
               \     \
                \     \
                 \     `.             _ _
                  \       ~- _ _ - ~       ~ - .
                   \                              ~-.
                    \                                `.
                     \    /               /       \    \
                      `. |         }     |         }    \
                        `|        /      |        /       \
                         |       /       |       /          \
                         |      /`- _ _ _|      /.- ~ ^-.     \
                         |     /         |     /          `.    \
                         |     |         |     |             -.   ` . _ _ _ _ _ _
                         |_____|         |_____|                ~ . _ _ _ _ _ _ _ >
-->

<style>
#jon-trombone-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    margin-top: 4.0rem;
    margin-bottom: 1.0rem;
}

#jon-trombone-container canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100% !important;
    height: 100% !important;
}
</style>

<div id="jon-trombone-container"></div>

This is what happens when you have a 3D scanner and too much free time. Above is a 3D scan of my head rigged for animation and hooked up to a modified version of [Pink Trombone](https://dood.al/pinktrombone/), which simulates the nose and throat to produce synthesized human vocals. You can play around with the controls in the upper-right.

Regrettably, this program supports MIDI playback. Use the GUI to load a MIDI file and start the playback. Keep in mind that as of right now (wink wink nudge nudge) only one track is played, which you can control with the "Track" control in the GUI.

The source is available on [GitHub](https://github.com/colejd/jon-trombone).

Thanks to Toni Kaplan for repairing and rigging the 3D model.

