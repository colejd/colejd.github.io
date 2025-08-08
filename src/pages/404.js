import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export const Head = () => (
  <SEO title="404'd!" />
)

const NotFoundPage = () => (
  <Layout>
    <h1>404'd!</h1>
    <StaticImage src="../assets/images/UnderConstruction.png" alt=""></StaticImage>
  </Layout>
)

export default NotFoundPage
