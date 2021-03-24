/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>

      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          {children}
        </main>
      </div> */}

      {/* <!-- Center everything when using an wide enough monitor --> */}
      <div className="w-full 2xl:flex 2xl:flex-row 2xl:justify-center">

        <div id="outer-column" className="flex flex-col columnbreak:flex-row">
          {/* <!-- Add skip-to-content button for users with screen readers. Should be first link on every page. --> */}
          <a className="sr-only focus:not-sr-only columnbreak:top-2 columnbreak:left-2" style={{"position": "absolute !important"}} href="#main-content">Skip to main content</a>

          <nav id="sidebar" className="px-5 columnbreak:py-8 flex-shrink-0 columnbreak:w-28" aria-label="Main Navigation">
            <div className="flex flex-row columnbreak:flex-col text-left py-2 columnbreak:py-0 flex-wrap">
              <a href="/">About&nbsp;Me</a>
              <span className="columnbreak:hidden px-1 select-none" aria-hidden="true">•</span>
              <a href="/blog/">Blog</a>
              <span className="columnbreak:hidden px-1 select-none" aria-hidden="true">•</span>
              <a href="/projects/">Projects</a>
              <span className="columnbreak:hidden px-1 select-none" aria-hidden="true">•</span>
              <a href="/apps/" >Apps</a>
            </div>
          </nav>

          <div className="main-column flex-grow mr-0 lg:mr-32 px-5 py-8 mb-20" aria-label="Main Content">
            <div className="main-column-interior flex flex-col">
              <main id="main-content">
                {children}
              </main>
              {/* {%- include footer.html -%} */}
            </div>
          </div>
        </div>

      </div>

      {/* {%- include loadlate.html -%} */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
