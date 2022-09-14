import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPreview = ({ post }) => (
  <section className="mb-8">
    <div className="rounded-lg">
      <header className="flex flex-col">
        <a href={post.fields.slug} className="text-2xl pt-4 pb-4">
          {post.frontmatter.title}
        </a>
        {post.frontmatter.coverPhoto != null ? (
          <a href={post.fields.slug} className="text-2xl pb-4">
            <GatsbyImage
              image={getImage(post.frontmatter.coverPhoto)}
              alt={post.frontmatter.coverPhotoAlt ?? ""}
              className="gatsby-image-fillwidth mb-0 mt-2"
            />
          </a>
        ) : (
          ""
        )}
      </header>
      <div className="">{ post.excerptOverride || post.excerpt }</div>
    </div>
  </section>
)
export default BlogPostPreview
