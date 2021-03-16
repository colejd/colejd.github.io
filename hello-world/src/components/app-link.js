import React from "react"
import { Link } from "gatsby"
const AppLink = ({ app }) => (
  <div>
    <Link to={app.fields.slug}>
      {app.frontmatter.title}
    </Link>
  </div>
)
export default AppLink