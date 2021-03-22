import React from "react"
import { graphql } from "gatsby"
import AppLink from "../../components/app-link"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Apps = edges
    .map(edge => <AppLink key={edge.node.id} app={edge.node} />)
  return <Layout>
      <SEO
        title="Apps"
        description="Apps by Jon."
      />
      <h1>Apps</h1>
      <div>{Apps}</div>
  </Layout>
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
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
          }
        }
      }
    }
  }
`