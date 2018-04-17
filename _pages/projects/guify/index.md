---
title: Guify
subtitle: A flexible, simple GUI for your JavaScript projects
layout: page
order: 2
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
    margin-top: 2rem;
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


<div id="guify-container" class="project-container growable">
    <div id="guify-container-content">
        <div id="content-text">
            [content]
        </div>
    </div>
</div>

<script src="https://unpkg.com/guify"></script>
<script src="index.js"></script>

<p style='text-align: center; margin-bottom: 1.5em;'>
    Themes: 
    <a href="javascript:void(0);" onclick="onThemeChange('light');">Light</a> - 
    <a href="javascript:void(0);" onclick="onThemeChange('dark');">Dark</a> - 
    <a href="javascript:void(0);" onclick="onThemeChange('yorha');">YoRHa</a>
    <br>
    Menu Bar: <a href="javascript:void(0);" onclick="onBarmodeChange('above');">Enable</a> - 
    <a href="javascript:void(0);" onclick="onBarmodeChange('none');">Disable</a>
</p>

Guify is a GUI system you can use in your JavaScript projects to modify variables and trigger actions.
I initially used <a href="https://workshop.chromeexperiments.com/examples/gui">dat.GUI</a>
while working on the other JavaScript projects on this website, but I was frustrated
with its limitations and wanted something better.

Guify is my solution. It's easy to use on mobile, easy to customize visually and functionally,
and it's built with accessibility in mind.

You can find more information on the <a href="https://github.com/colejd/guify">GitHub repo</a>, 
and you can get the latest version yourself as an <a href="https://www.npmjs.com/package/guify">NPM package</a> 
or for browser embedding through a CDN at <a href="https://unpkg.com/guify">unpkg.com/guify</a>.
