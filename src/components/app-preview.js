import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AppPreview = ({ app }) => (
  <section className="mb-12">
    <header className="flex flex-col mb-2">
      <a href={app.fields.slug} className="text-2xl">
        {app.frontmatter.title}
      </a>
      <div className="text-sm">{app.frontmatter.subtitle}</div>
      <div className="text-sm">{app.frontmatter.appPlatform}</div>
      {app.frontmatter.coverPhoto != null ? (
        <a href={app.fields.slug}>
          <GatsbyImage
            image={getImage(app.frontmatter.coverPhoto)}
            alt={app.frontmatter.coverPhotoAlt ?? ""}
            className="mt-2"
          />
        </a>
      ) : (
        ""
      )}
    </header>
  </section>
)
export default AppPreview
