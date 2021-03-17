import React from "react"
import { graphql } from "gatsby"
import ProjectLink from "../../components/project-link"
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)
  return <div>{Projects}</div>
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
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
            order
          }
        }
      }
    }
  }
`