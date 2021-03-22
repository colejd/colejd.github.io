import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPreview = ({ post }) => (
  <section className="mb-12">
    <header className="flex flex-col mb-2">
      {post.frontmatter.coverPhoto != null ? (
        <Link to={post.fields.slug} className="text-2xl">
          <GatsbyImage
            image={getImage(post.frontmatter.coverPhoto)}
            alt={post.frontmatter.coverPhotoAlt}
            className="mb-2"
          />
        </Link>
      ) : (
        ""
      )}
      <Link to={post.fields.slug} className="text-2xl">
        {post.frontmatter.title}
      </Link>
      <time datetime={post.frontmatter.isoDate} className="text-sm">
        {post.frontmatter.readableDate}
      </time>
    </header>
    <div className="mt-1">{post.excerpt}</div>
  </section>
)
export default BlogPostPreview
