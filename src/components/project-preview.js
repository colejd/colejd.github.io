import React from "react"
// import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectPreview = ({ project }) => (
  <section className="mb-8">
    <div className="rounded-t-lg bg-gray-200 dark:bg-gray-800 p-4">
      <header className="flex flex-col">
        <a href={project.fields.slug} className="text-2xl mb-1">
          {project.frontmatter.title}
        </a>
        <div className="text-sm">{project.frontmatter.subtitle}</div>
      </header>
    </div>
    {project.frontmatter.coverPhoto != null ? (
      <a href={project.fields.slug}>
        <GatsbyImage
          image={getImage(project.frontmatter.coverPhoto)}
          alt={project.frontmatter.coverPhotoAlt ?? ""}
          className="mt-0"
        />
      </a>
    ) : (
      ""
    )}
  </section>
)
export default ProjectPreview
