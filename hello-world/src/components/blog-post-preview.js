import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPreview = ({ post }) => (
  <section className="mb-16">
    <header className="flex flex-col mb-2">
      <Link to={post.fields.slug} className="text-2xl">
        {post.frontmatter.title}
      </Link>
      <time dateTime={post.frontmatter.isoDate} className="text-sm">
        {post.frontmatter.readableDate}
      </time>
      {post.frontmatter.coverPhoto != null ? (
        <Link to={post.fields.slug} className="text-2xl">
          <GatsbyImage
            image={getImage(post.frontmatter.coverPhoto)}
            alt={post.frontmatter.coverPhotoAlt ?? ""}
            className="mb-0 mt-2"
          />
        </Link>
      ) : (
        ""
      )}
    </header>
    <div className="">{post.excerpt}</div>
  </section>
)
export default BlogPostPreview
