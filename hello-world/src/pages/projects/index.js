import React from "react"
import { graphql } from "gatsby"
import ProjectLink from "../../components/project-link"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)
    return <Layout>
      <SEO
        title="Projects"
        description="Projects by Jon."
      />
      <h1>Projects</h1>
      <div>{Projects}</div>
    </Layout>
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