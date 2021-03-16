/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

let getMarkdownNodes = async (graphql, path) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(${path})/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
                title
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
