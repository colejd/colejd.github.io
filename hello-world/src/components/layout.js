/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
      <div class="w-full 2xl:flex 2xl:flex-row 2xl:justify-center">

        <div id="outer-column" class="flex flex-col columnbreak:flex-row">
          {/* <!-- Add skip-to-content button for users with screen readers. Should be first link on every page. --> */}
          <a class="sr-only focus:not-sr-only columnbreak:top-2 columnbreak:left-2" style={{"position": "absolute !important"}} href="#main-content">Skip to main content</a>

          <nav id="sidebar" class="px-5 columnbreak:py-8 flex-shrink-0 columnbreak:w-28" aria-label="Main Navigation">
            <div class="flex flex-row columnbreak:flex-col text-left py-2 columnbreak:py-0">
              <Link to="/">About&nbsp;Me</Link>
              <span class="columnbreak:hidden px-1">•</span>
              <Link to="/blog/">Blog</Link>
              <span class="columnbreak:hidden px-1">•</span>
              <Link to="/projects/">Projects</Link>
              <span class="columnbreak:hidden px-1">•</span>
              <Link to="/apps/">Apps</Link>
            </div>
          </nav>

          <div class="main-column flex-grow mr-0 lg:mr-32 px-5 py-8 mb-20" aria-label="Main Content">
            <div class="main-column-interior flex flex-col">
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
