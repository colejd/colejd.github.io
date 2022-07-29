import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPreview = ({ post }) => (
  <section className="mb-8">
    <div className="rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
      <header className="flex flex-col mb-2">
        <a href={post.fields.slug} className="text-2xl">
          {post.frontmatter.title}
        </a>
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
    </div>
  </section>
)
export default BlogPostPreview
