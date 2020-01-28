/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createPages = require(`./gatsby/createPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
}
