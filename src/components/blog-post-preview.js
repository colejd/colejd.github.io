import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPreview = ({ post }) => (
  <section className="mb-16">
    <header className="flex flex-col mb-2">
      <a href={post.fields.slug} className="text-2xl">
        {post.frontmatter.title}
      </a>
      <time dateTime={post.frontmatter.isoDate} className="text-sm">
        {post.frontmatter.readableDate}
      </time>
      {post.frontmatter.coverPhoto != null ? (
        <a href={post.fields.slug} className="text-2xl">
          <GatsbyImage
            image={getImage(post.frontmatter.coverPhoto)}
            alt={post.frontmatter.coverPhotoAlt ?? ""}
            className="mb-0 mt-2"
          />
        </a>
      ) : (
        ""
      )}
    </header>
    <div className="">{post.excerpt}</div>
  </section>
)
export default BlogPostPreview
