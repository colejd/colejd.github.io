import React from "react"
import { graphql } from "gatsby"
import BlogPostPreview from "../../components/blog-post-preview"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogPostPreview key={edge.node.id} post={edge.node} />)
  return <Layout>
    <SEO
      title="Blog"
      description="Blog posts by Jon."
    />
    <h1>Blog</h1>
    <div>{Posts}</div>
  </Layout>
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
              slug
          }
          frontmatter {
            date
            isoDate: date(formatString: "YYYY-MM-DD")
            readableDate: date(formatString: "MMMM DD, YYYY")
            title
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