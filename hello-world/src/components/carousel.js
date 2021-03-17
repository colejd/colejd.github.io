import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./carousel.css"

var settings = {
  dots: true,
  infinite: true,
  autoPlay: false,
  speed: 500,
  slidesToShow: 1,
  variableWidth: true,
  centerMode: true
};

const Carousel = (props) => (
  <Slider {...settings}>
    {
      props.images.map ((image) => (
        <img src={image} />
      ))
    }
  </Slider>
)
export default Carousel
