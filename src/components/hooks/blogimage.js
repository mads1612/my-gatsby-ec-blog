import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        blogHeroImg: file(relativePath: { eq: "blog-desk.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1240, 
              duotone: { highlight: "#000000", shadow: "#222222", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img style={{ maxHeight: '60vh' }} fluid={data.blogHeroImg.childImageSharp.fluid} alt="Writing Desk" />}
  />
)
export default Image
