import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./blog-post-preview.css"

const BlogPostPreview = ({ post }) => (
  <section className="blog-post-preview mb-4">
    <header className="flex flex-col mb-2">
        { post.frontmatter.coverPhoto != null ?
            <GatsbyImage image={getImage(post.frontmatter.coverPhoto)} alt={post.frontmatter.coverPhotoAlt} className="mb-2" />
            : ""
        }
        <Link to={post.fields.slug} className="blog-post-preview-title">
            {post.frontmatter.title}
        </Link>
        <time datetime={post.frontmatter.isoDate} className="blog-post-preview-date">
            {post.frontmatter.readableDate}
        </time>
    </header>
    <div className="blog-post-preview-excerpt">
        {post.excerpt}
    </div>
  </section>
)
export default BlogPostPreview