import React from "react"

import "./thursday.css"

// Really here just to import a static js file into the final page.
const ThursdayLoader = props => {
  return (
    <>
      <script src="/assets/js/IsItThursday/thursday-loader.js" defer />
    </>
  )
}
export default ThursdayLoader
