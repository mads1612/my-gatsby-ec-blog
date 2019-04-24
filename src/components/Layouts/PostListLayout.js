import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import styled from "styled-components"

import Navbar from "../Navbar/Navbar"
import HomeHeader from "../Hero/Header"
import Footer from "../Footer"
import { GlobalStyles } from "../../utils"

const Body = styled.div`
  display: flex;
  min-height: 40vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
`

const PostListLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogHero {
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
    `}
    render={data => (
      <>
        <div>
          <Body>
            <GlobalStyles />
            <Navbar />
            <HomeHeader fluid={data.allImageShape.edges.node.fluid} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 800,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </Body>
          <Footer />
        </div>
      </>
    )}
  />
)

export default PostListLayout
