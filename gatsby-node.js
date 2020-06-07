/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slugify = require(`slugify`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const getProjects = makeRequest(
    graphql,
    `
    {
      allStrapiProjects {
        edges {
          node {
            Title
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiProjects.edges.forEach(({ node }) => {
      const slug = slugify(node.Title)

      createPage({
        path: `/project/${slug}`,
        component: path.resolve(`src/templates/project.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
  // Query for articles nodes to use in creating pages.
  return getProjects
}