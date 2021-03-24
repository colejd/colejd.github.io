import React from "react"

import useScript from "../utils/hooks/use-scripts"
import { Helmet } from "react-helmet"

// See https://using-remark.gatsbyjs.org/custom-components/

/**
 * This component adds a <script> tag to the dom that's tied to React's lifecycle stuff.
 */
const RuntimeScript = (props) => {
    // Method 1: Load in React lifecycle
    useScript(props.src)
    return (
        <>
            <div></div>
            {/* <div>{props.src}</div> */}

            {/* Method 2: Add script tag directly */}
            {/* <div dangerouslySetInnerHTML={{ __html: `<script defer src="${props.src}"></script>` }}></div> */}

            {/* Method 3: Append to head */}
            {/* <Helmet>
                <script defer src={props.src}></script>
            </Helmet> */}
        </>
    )
}

export default RuntimeScript