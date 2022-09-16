import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AppPageStructuredData } from "../components/structured-data"
import Carousel from "../components/carousel"

import { concatPaths } from "../utils/path-utils"

class AppPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    let additionalSEOMeta = {}
    if (post.frontmatter.images.length > 0) {
      let coverPhotoFullPath = concatPaths(this.props.data.site.siteMetadata.siteUrl, post.frontmatter.images[0].publicURL)
      additionalSEOMeta["twitter:card"] = "summary_large_image"
      additionalSEOMeta["twitter:image"] = coverPhotoFullPath
      additionalSEOMeta["og:image"] = coverPhotoFullPath
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          meta={additionalSEOMeta}
        />

        <AppPageStructuredData app={post} debug={false} />

        <article className="prose-slate">
          <header>
            <h1 className="text-3xl columnbreak:text-5xl mb-0">
              {post.frontmatter.title}
            </h1>
            <p className="text-sm leading-loose mb-8 ">
              {post.frontmatter.date}
            </p>
          </header>
          {/* {post.frontmatter.images.map(image => image.publicURL)} */}
          <Carousel images={post.frontmatter.images}/>
          <section
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    )
  }
}

export default AppPageTemplate

export const pageQuery = graphql`
  query AppPageBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        images {
          publicURL
          childImageSharp {
            id
            gatsbyImageData(
              height: 400
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: {
                fit: INSIDE
              }
            )
          }
        }
        appName
        appCategory
        appPlatform
        appPrice
      }
    }
  }
`