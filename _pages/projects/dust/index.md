---
title: "Dust"
subtitle: Cellular Automata in JS
description: Interactive Cellular Automata in Javascript.
layout: project-page
published: false
---

<style>
#dust-container {
    margin-top: 3.0rem;
}
</style>

<!-- Get latest version of Guify off of NPM-->
<script src="https://unpkg.com/guify/lib/guify.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.3/pixi.min.js"></script>

<p style="color:red; text-align: center;">
Epilepsy Warning: Some settings can cause bright flashing.
</p>

<div id="dust-container" class="project-container"></div>

<div markdown="1" class="prose lg:prose-xl">
Dust is a WebGL-based simulator / renderer for various Cellular Automata. The simulation is largely based on [CellAuto](https://sanojian.github.io/cellauto/), and many of the automata came from there (see the repo for this project on [GitHub](href="https://github.com/colejd/Dust") for more information). My goals with this are to add interactivity and graphical features as time goes on.
</div>

<script src="js/dust.min.js"></script>