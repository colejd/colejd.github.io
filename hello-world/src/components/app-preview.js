import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AppPreview = ({ app }) => (
  <section className="mb-12">
    <header className="flex flex-col mb-2">
      {app.frontmatter.coverPhoto != null ? (
        <Link to={app.fields.slug}>
          <GatsbyImage
            image={getImage(app.frontmatter.coverPhoto)}
            alt={app.frontmatter.coverPhotoAlt}
            className="mb-2"
          />
        </Link>
      ) : (
        ""
      )}
      <Link to={app.fields.slug} className="text-2xl">
        {app.frontmatter.title}
      </Link>
      <div className="text-sm">{app.frontmatter.subtitle}</div>
      <div className="text-sm">{app.frontmatter.appPlatform}</div>
    </header>
  </section>
)
export default AppPreview
