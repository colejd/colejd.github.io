import React from "react"
import { graphql } from "gatsby"
import AppPreview from "../../components/app-preview"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export const Head = () => (
  <SEO
    title="Apps"
    description="Apps by Jon."
  />
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Apps = edges
    .map(edge => {
      return <div>
        <AppPreview key={edge.node.id} app={edge.node} />
        <hr/>
      </div>
    })
  return <Layout>
      <h1>Apps</h1>
      <div>{Apps}</div>
  </Layout>
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { frontmatter: { title: DESC } }
        filter: { fileAbsolutePath: { regex: "/(apps)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
              slug
          }
          frontmatter {
            title
            subtitle
            appPlatform
            coverPhoto {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`