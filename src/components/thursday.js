import React from "react"

import RuntimeScript from "../components/runtime-script"

import "./thursday.css"

// Really here just to import a static js file into the final page.
const ThursdayLoader = props => {
  return (
    <>
      <RuntimeScript src="/assets/js/IsItThursday/thursday-loader.js"></RuntimeScript>
      {/* <script src="/assets/js/IsItThursday/thursday-loader.js" defer /> */}
    </>
  )
}
export default ThursdayLoader
