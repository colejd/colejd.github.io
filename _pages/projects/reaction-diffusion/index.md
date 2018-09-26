---
title: Reaction-Diffusion Simulator
subtitle: Mobile morphogenesis
layout: page
order: 1
cover-image: preview.png
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

<div id="reaction-diffusion-container" class="project-container growable shadowed"></div>

<p style="text-align: center"><em>Press and drag to draw.</em></p>

This project is a GPGPU simulation of a [Gray-Scott](http://mrob.com/pub/comp/xmorphia/) Reaction-Diffusion system. Reaction-Diffusion systems have many interesting properties, and can be used to model various biological, chemical, and ecological processes.

Here, many of the presets you can try develop in a way similar to the formation of skin pigments in spotted or striped animals. [More reading here](https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system).

The code for this project is available on [Github](https://github.com/colejd/Reaction-Diffusion-ThreeJS).

I expanded this project significantly into an app for iOS and macOS. Have a look [here](/apps/liquid-math) if you're interested.

**_Note: This will run at half precision on iOS due to browser limitations, so some of the presets may not behave as intended._**

<script src="https://unpkg.com/guify"></script>
<script src="dist/reaction-diffusion.min.js"></script>

{% comment %}
<!-- Disqus Stuff-->
<div id="disqus_thread" style="margin-top: 2em;"></div>
<script>
    var disqus_config = function() {
        this.page.url = "http://www.joncole.me/reaction-diffusion.html"; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = "reaction-diffusion"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document,
            s = d.createElement('script');
        s.src = '//joncole.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endcomment %}