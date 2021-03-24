import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./project-page.css"

import RuntimeScript from "../components/runtime-script"

import rehypeReact from "rehype-react"

const ProjectPageTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  const components = {
    script: RuntimeScript, // Replace <script> with RuntimeScript at runtime
  }
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: components,
  }).Compiler

  return (
    <Layout location={props.location} title={siteTitle}>
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
            <em>{post.frontmatter.subtitle}</em>
          </p>
        </header>
        <section className="markdown">
          {renderAst(post.htmlAst)}
        </section>
      </article>
    </Layout>
  )
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
      htmlAst
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
