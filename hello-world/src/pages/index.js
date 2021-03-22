import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FaceSVG from "/src/assets/images/svg/posterized_simplified.svg"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="flex flex-row" style={{"marginBottom": "0.8888889em"}}>
        <div class="flex flex-col">
            <h1 class="" style={{"marginBottom": 0}}>Hi, I'm Jon.</h1>
            <span>
            <a href="https://github.com/colejd">Github</a>   •   <a href="/resume/">Resume</a>   •   <a href="mailto:jon@jons.website">Email</a>
            </span>
        </div>
        <FaceSVG className="w-auto h-20 bg-white rounded-md p-1 ml-4 nightwind-prevent" />
    </div>

  <p>
  I'm a software developer living in Boston, where I help build world-class iOS and augmented reality apps as a Senior Developer at <a href="https://www.rightpoint.com/">Rightpoint (formerly Raizlabs)</a>. Prior to that, I was part of the <a href="https://umaine.edu/vemi/">Virtual Environment and Multimodal Interaction Laboratory</a>, where I worked at the forefront of human-computer interaction and psychospatial research with VR and AR. I'm skilled with iOS, AR, VR, and computer vision.
  </p>

  <p style={{"marginBottom": 0}}>
  I like hard problems, and I've worked on a lot of them. Some of them include:
  </p>
  <ul style={{"marginTop": "0.1em"}}>
  <li class="emoji-bullet emoji-bullet-pizza"><a href="/apps/liquid-math">A Metal-powered Reaction-Diffusion simulator for iOS and macOS</a></li>
  <li class="emoji-bullet emoji-bullet-film-reel"><a href="https://github.com/colejd/waldorf">A full-stack video annotation solution for preserving and categorizing historical footage</a></li>
  <li class="emoji-bullet emoji-bullet-sunglasses"><a href="https://github.com/colejd/kino">Software and hardware that helps researchers use AR to study perception and aging</a></li>
  <li class="emoji-bullet emoji-bullet-car"><a href="https://cugr.umaine.edu/wp-content/uploads/sites/146/2013/04/2013_CUGR-ShowcaseAbstracts1.pdf">A fully-immersive VR driving simulator for studying compensatory augmented reality</a>, complete with a real car seat</li>
  <li class="emoji-bullet emoji-bullet-signpost">An iOS app that helps blind and low-vision people find bus stops with Bluetooth ranging</li>
  <li class="emoji-bullet emoji-bullet-light-bulb">The next generation of smart lighting for iOS</li>
  <li class="emoji-bullet emoji-bullet-robot">An occupancy grid vectorizer and visualizer for cleaning robots</li>
  </ul>

  <p>
  {/* That's just a surface look at my work, a lot of which is open-source on [Github](). If you're interested, you can see more about me on my [resume](/resume), or [get in touch via email](mailto:{{- site.email -}}). */}
  </p>
  </Layout>
)

export default IndexPage
