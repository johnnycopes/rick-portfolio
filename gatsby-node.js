const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              isActive
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log("base:", node)
    if (node.frontmatter.isActive !== false) {
      console.log("made it in:", node)
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${node.frontmatter.templateKey}.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          slug: node.fields.slug,
        },
      })
    }
    console.log("=================")
  })

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
}

