import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./carousel.css"

const Carousel = (props) => (
  <div class="screenshots">
    {
      props.images.map ((image, index) => {
        // return <img key={index} src={image.publicURL} alt="" />
        const imageData = getImage(image)
        return <GatsbyImage key={index} image={imageData} alt="" className="screenshot" loading="eager" objectFit="contain" style={{ minWidth: 100 }}/>
      })
    }
  </div>
)
export default Carousel
