import React from "react"
import { graphql } from "gatsby"
import AppLink from "../../components/app-link"
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Apps = edges
    .map(edge => <AppLink key={edge.node.id} app={edge.node} />)
  return <div>{Apps}</div>
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