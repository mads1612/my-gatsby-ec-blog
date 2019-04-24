import { graphql, useStaticQuery } from "gatsby"

const useBlogHero = () => {
  const data = useStaticQuery(
    graphql`
      query BLOG_HERO_QUERY {
        allImageSharp(filter: { original: { src: { regex: "/blog-desk/" } } }) {
          edges {
            node {
              fluid(
                duotone: {
                  highlight: "#000000"
                  shadow: "#222222"
                  opacity: 20
                }
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  return data.allImageSharp.edges.node.fluid
}

export default useBlogHero
