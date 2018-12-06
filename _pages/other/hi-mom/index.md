---
title: Hi Mom!
layout: none
hide: true
robots: noindex, nofollow
permalink: /hi-mom
---

<style>
    #gameContainer {
        width: 100vw;
        height: 100vh;
    }
    canvas {
        width: 100%;
        height: 100%;
        display: block;
    }
    body {
        margin: 0;
        background: #444;
    }
</style>

<script src="/other/hi-mom/TemplateData/UnityProgress.js"></script>  
<script src="/other/hi-mom/Build/UnityLoader.js"></script>
<script>
    var gameInstance = UnityLoader.instantiate("gameContainer", "/other/hi-mom/Build/Build.json", {onProgress: UnityProgress});
</script>

<div id="gameContainer"></div>

