---
title: Jon-Trombone
subtitle: A tragic monument to vanity
layout: page
order: 3
cover-image: preview.png
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
    margin-top: 2.0rem;
    margin-bottom: 1.0rem;
}

#jon-trombone-container canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

</style>

<!-- Get latest version of Guify off of NPM -->
<script src="https://unpkg.com/guify"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js"></script>
<script src="dependencies/OrbitControls.js"></script>

<div id="jon-trombone-container"></div>

This is what happens when I have too much free time. Jon-Trombone is a 3D scan of me hooked
up to a modified version of [Pink Trombone](https://dood.al/pinktrombone/), 
which simulates the nose and throat to produce synthesized human vocals. You can play
around with the controls in the upper-right.

Regrettably, this program supports MIDI playback. Use the GUI to load a MIDI file and
start the playback. Keep in mind that as of right now (wink wink nudge nudge) only one 
track is played, which you can control with the "Track" control in the GUI.

The source is available on [GitHub](https://github.com/colejd/jon-trombone)</a>.

Thanks to Toni Kaplan for repairing and rigging the 3D model.

<script src="jon-trombone.js"></script>

