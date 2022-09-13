import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPostStructuredData } from "../components/structured-data"

import { concatPaths } from "../utils/path-utils"

require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

require("./blog-post.css")

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const metadata = this.props.data.site.siteMetadata
    // const { previous, next } = this.props.pageContext

    const coverImage = getImage(post.frontmatter.coverPhoto)

    // Customize SEO for blog post format
    let additionalSEOMeta = {}
    if (post.frontmatter.coverPhoto?.publicURL) {
      let coverPhotoFullPath = concatPaths(metadata.siteUrl, post.frontmatter.coverPhoto?.publicURL)
      additionalSEOMeta["twitter:card"] = "summary_large_image"
      additionalSEOMeta["twitter:image"] = coverPhotoFullPath
      additionalSEOMeta["twitter:image:alt"] = post.frontmatter.coverPhotoAlt
      additionalSEOMeta["og:image"] = coverPhotoFullPath
    }
    additionalSEOMeta["og:type"] = "article"
    additionalSEOMeta["og:article:published_time"] = post.frontmatter.date
    additionalSEOMeta["og:article:modified_time"] = post.frontmatter.dateModified

    return (
      <Layout location={this.props.location} title={metadata.title}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          meta={additionalSEOMeta}
          debug={false}
        />
        <BlogPostStructuredData post={post} debug={false} />
        <article>
          <header>
            <h1 className="text-3xl columnbreak:text-5xl mb-2 columnbreak:mb-4">
              {post.frontmatter.title}
            </h1>
            <p className="mb-0">
              <em>
                {post.frontmatter.subtitle}
              </em>
            </p>
            <p className="text-sm leading-loose mb-4">
              <time dateTime={post.frontmatter.isoDate}>
                {post.frontmatter.readableDate}
              </time>
            </p>
            { post.frontmatter.coverPhoto != null ?
              <GatsbyImage image={coverImage} alt={post.frontmatter.coverPhotoAlt ?? ""} className="mb-4" /> :
              <hr />
            }
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        language
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(format: MARKDOWN, pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        coverPhoto {
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        coverPhotoAlt
        date
        isoDate: date(formatString: "YYYY-MM-DD")
        readableDate: date(formatString: "MMMM Do, YYYY")
        dateModified
        description
        keywords
      }
    }
  }
`