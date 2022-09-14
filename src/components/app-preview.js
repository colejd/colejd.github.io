import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AppPreview = ({ app }) => (
  <section className="mb-8">
    <div className="rounded-t-lg pb-4">
      <header className="flex flex-col">
        <a href={app.fields.slug} className="text-2xl mb-1">
          {app.frontmatter.title}
        </a>
        <div className="text-sm mb-1">{app.frontmatter.subtitle}</div>
        <div className="text-sm italic">{app.frontmatter.appPlatform}</div>
      </header>
    </div>
    {app.frontmatter.coverPhoto != null ? (
      <a href={app.fields.slug}>
        <GatsbyImage
          image={getImage(app.frontmatter.coverPhoto)}
          alt={app.frontmatter.coverPhotoAlt ?? ""}
          className="mt-0"
        />
      </a>
    ) : (
      ""
    )}
  </section>
)
export default AppPreview
