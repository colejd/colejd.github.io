/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// https://stackoverflow.com/questions/60289062/allow-optional-graphql-data-in-gatsby
// https://stackoverflow.com/questions/60304063/how-to-allow-optional-sharp-image-in-graphql-gatsby
// https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#nested-types
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  // Add optional `draft` field to markdown frontmatter
  const typeDefs = [
      `type MarkdownRemark implements Node {
          frontmatter: Frontmatter
          coverPhoto: File
      }`,
      `type Frontmatter @infer {
          draft: Boolean
          dateModified: Date
      }`,
  ];

  createTypes(typeDefs);
};

let getMarkdownNodes = async (graphql, path) => {
  let filterOutDrafts =  (activeEnv == "development") ? '' : ', frontmatter: {draft: { ne: true }}'
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: {regex: "/(${path})/"} ${filterOutDrafts} }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
                title
                draft
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  return result.data.allMarkdownRemark.edges
}

let createMarkdownPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog posts pages.
  const posts = await getMarkdownNodes(graphql, 'blog')
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    const template = path.resolve(`./src/templates/${post.node.frontmatter.template}.js`)

    createPage({
      path: post.node.fields.slug,
      component: template,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const apps = await getMarkdownNodes(graphql, 'apps')
  apps.forEach((app, index) => {
    const template = path.resolve(`./src/templates/${app.node.frontmatter.template}.js`)

    createPage({
      path: app.node.fields.slug,
      component: template,
      context: {
        slug: app.node.fields.slug,
      },
    })
  })

  const projects = await getMarkdownNodes(graphql, 'projects')
  projects.forEach((project, index) => {
    const template = path.resolve(`./src/templates/${project.node.frontmatter.template}.js`)

    createPage({
      path: project.node.fields.slug,
      component: template,
      context: {
        slug: project.node.fields.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createMarkdownPages({ graphql, actions })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
