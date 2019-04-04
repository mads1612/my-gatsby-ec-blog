import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "typeface-merriweather"

import Container from "../components/Container"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            title
          }
        }
        file(relativePath: { regex: "/computer-desk/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allMenuJson {
          edges {
            node {
              title
              link
              id
            }
          }
        }
        featured: allMarkdownRemark {
          edges {
            node {
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 630) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Body>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
            <meta
              name="description"
              content="I am a serverless and modern application consultant and continously find ways to help my clients unlock value by switching from old school development methodology to a modern approach!"
            />
          </Helmet>
          <Navbar menu={data.allMenuJson.edges} />
          <Container>{children}</Container>
          <Footer />
        </Body>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
