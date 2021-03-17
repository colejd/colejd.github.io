import React from "react"
import { Link } from "gatsby"
const ProjectLink = ({ project }) => (
  <div>
    <Link to={project.fields.slug}>
      {project.frontmatter.title} ({project.frontmatter.order})
    </Link>
  </div>
)
export default ProjectLink