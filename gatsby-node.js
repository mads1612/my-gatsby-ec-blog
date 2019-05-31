const path = require(`path`)
const _ = require('lodash')

const formatStrForPath = str =>
  str
    .toLowerCase()
    .split(' ')
    .join('-')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const separatorIndex = ~slug.indexOf('--') ? slug.indexOf('--') : 0
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0

    createNodeField({
      name: `slug`,
      node,
      value: `${separatorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
    })
    createNodeField({
      node,
      name: `prefix`,
      value: separatorIndex ? slug.substring(1, separatorIndex) : '',
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/blog-post.js`)
    const CategoriesTemplate = path.resolve('src/templates/CategoryTemplate.js')

    // Do not create draft post files in production.
    let activeEnv =
      process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
    console.log(`Using environment config: '${activeEnv}'`)
    let filters = `filter: { fields: { slug: { ne: null } } }`
    if (activeEnv == 'production')
      filters = `filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }`
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(
            ` +
          filters +
          `
          sort: { fields: [fields___prefix], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                prefix
              }
              frontmatter {
                title
                category
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Reduce categories
        const { categories } = posts.reduce(
          (acc, post) => {
            const { categories } = post.node.frontmatter

            if (!categories) {
              return acc
            }

            if (categories) {
              categories.forEach(category => {
                acc.categories.add(category)
              })
            }

            return acc
          },
          {
            categories: new Set(),
          }
        )

        // Create category list
        const categorySet = new Set()
        posts.forEach(edge => {
          const {
            node: {
              frontmatter: { category },
            },
          } = edge

          if (category && category !== null) {
            categorySet.add(category)
          }
        })

        // Create individual Category pages
        const categoryList = Array.from(categorySet)
        categoryList.forEach(category => {
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: CategoriesTemplate,
            context: {
              category,
            },
          })
        })

        // Create All Categories page
        createPage({
          path: 'categories',
          component: CategoriesTemplate,
          context: {
            categories: Array.from(categories),
          },
        })
      })
    )
  })
}
