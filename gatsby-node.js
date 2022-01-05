/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const fs = require("fs")
const yaml = require("js-yaml")

const contentPath = "./src/content"
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  // create types
  const typedefs = fs.readFileSync(`${contentPath}/typedefs.graphql`, "utf-8")
  createTypes(typedefs)
}

// add the content into a single json
exports.createResolvers = ({ createResolvers }) => {
  contentFiles = fs.readdirSync(contentPath).filter(fn => fn.endsWith(".json"))
  const data = contentFiles.reduce((data, fn) => {
    const doc = yaml.safeLoad(fs.readFileSync(`${contentPath}/${fn}`, "utf-8"))
    return { ...data, ...doc }
  }, {})
  createResolvers({
    Query: {
      content: {
        type: "Content!",
        resolve() {
          return data
        },
      },
    },
  })
}
