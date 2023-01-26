import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FaceSVG from "/src/assets/images/svg/posterized_simplified.svg"
import ThursdayLoader from "../components/thursday"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />

    <div className="flex flex-col" style={{"marginBottom": "0.8888889em"}}>
      <div className="flex flex-row">
        <h1 className="" style={{"marginBottom": 0}}>Hi, I'm Jon.</h1>
        <FaceSVG className="w-auto h-10 bg-white rounded-md p-1 ml-4"/>
      </div>
      <span className="flex flex-row">
        <a href="https://github.com/colejd">GitHub</a>
        <span className="px-1 select-none" aria-hidden="true">•</span>
        <a href="/resume/">Resume</a>
        <span className="px-1 select-none" aria-hidden="true">•</span>
        <a href="mailto:jon@jons.website">Email</a>
      </span>
      <button id="thursday-button" className="mt-2" style={{"visibility": "hidden", "opacity": "0"}}>🎵 It's Thursday 🎵</button>
    </div>

    <ThursdayLoader />

    <p>
    I help build world-class iOS, augmented reality and Unreal Engine apps as a Lead Developer at <a href="https://www.rightpoint.com/">Rightpoint (formerly Raizlabs)</a>. Prior to that, I was part of the <a href="https://umaine.edu/vemi/">Virtual Environment and Multimodal Interaction Laboratory</a>, where I worked at the forefront of human-computer interaction and psychospatial research with VR and AR. I'm skilled with iOS, AR, VR, and computer vision.
    </p>

    <p>
    I've worked on a lot of stuff, from robotics, computer vision, Internet of Things devices, interactive museum exhibits, <a href="https://cheese.team">game development</a>, building my own VR headset, and so much more. I built this website, too! A lot my work is open-source on <a href="https://github.com/colejd">my GitHub profile</a> if you'd like to have a look. 
    </p>

    <p>
    If you're interested, you can learn more about me on my <a href="/resume/">resume</a>, and you can <a href="mailto:jon@jons.website">get in touch via email here</a>.
    </p>
  </Layout>
)

export default IndexPage
