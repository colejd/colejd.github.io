import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./project-page.css"

class ProjectPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 className="text-3xl columnbreak:text-5xl mb-0">
              {post.frontmatter.title}
            </h1>
            <p className="leading-loose mb-8 ">
              <em>
                {post.frontmatter.subtitle}
              </em>
            </p>
          </header>
          <section
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    )
  }
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`