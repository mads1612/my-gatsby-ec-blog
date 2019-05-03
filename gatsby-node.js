const path = require(`path`)
const _ = require("lodash")

const formatStrForPath = str =>
  str
    .toLowerCase()
    .split(" ")
    .join("-")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const separatorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0

    createNodeField({
      name: `slug`,
      node,
      value: `${separatorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`,
    })
    createNodeField({
      node,
      name: `prefix`,
      value: separatorIndex ? slug.substring(1, separatorIndex) : "",
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/blog-post.js`)
    const ExcerptList = path.resolve(`./src/templates/ExcerptList.js`)
    const CategoriesTemplate = path.resolve("src/templates/CategoryTemplate.js")

    // Do not create draft post files in production.
    let activeEnv =
      process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
    console.log(`Using environment config: '${activeEnv}'`)
    let filters = `filter: { fields: { slug: { ne: null } } }`
    if (activeEnv == "production")
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
          console.log(result.errors)
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

        // Reduce categories and tags
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

            // if (tags) {
            //   tags.forEach(tag => {
            //     acc.tags.add(tag)
            //   })
            // }

            return acc
          },
          {
            categories: new Set(),
            // tags: new Set(),
          }
        )

        // Create All Categories page
        createPage({
          path: "categories",
          component: CategoriesTemplate,
          context: {
            categories: Array.from(categories),
          },
        })

        // Create All Tags page
        createPage({
          path: "tags",
          component: CategoriesTemplate,
          context: {
            tags: Array.from(tags),
          },
        })

        // Create individual Category pages
        // categories.forEach(category => {
        //   createPage({
        //     path: `categories/${formatStrForPath(category)}`,
        //     component: categoriesTemplate,
        //     context: {
        //       category,
        //     },
        //   })
        // })

        // Create ExcerptList (blog) page
        const postsPerPage = 5
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({
          length: numPages,
        }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: ExcerptList,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      })
    )
  })
}
