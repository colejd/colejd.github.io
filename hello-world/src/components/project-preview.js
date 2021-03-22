import React from "react"
import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectPreview = ({ project }) => (
  <section className="mb-8">
  <header className="flex flex-col mb-2">
    { project.frontmatter.coverPhoto != null ?
        <Link to={project.fields.slug}>
          <GatsbyImage image={getImage(project.frontmatter.coverPhoto)} alt={project.frontmatter.coverPhotoAlt} className="mb-2" />
        </Link>
        : ""
    }
    <Link to={project.fields.slug} className="text-2xl">
        {project.frontmatter.title}
    </Link>
    <div className="text-sm">
      {project.frontmatter.subtitle}
    </div>
  </header>
</section>
)
export default ProjectPreview