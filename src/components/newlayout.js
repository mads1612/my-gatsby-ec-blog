import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Footer from "./footer"

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const NewLayout = ({ children }) => (
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
      }
    `}
    render={data => (
      <div>
        <Img
          style={{ maxHeight: "60vh" }}
          fluid={data.file.childImageSharp.fluid}
        />

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `0 1rem`,
          }}
        >
          <header
            style={{
              marginBottom: `1.5rem`,
              marginTop: `1rem`,
            }}
          >
            <h3 style={{ display: `inline` }}>
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {data.site.siteMetadata.title}
              </Link>
            </h3>
            <ul
              style={{
                listStyle: `none`,
                float: `right`,
              }}
            >
              <ListLink to="/">Home</ListLink>
              <ListLink to="/page-2">Page 2</ListLink>
            </ul>
          </header>
          {children}
          <Footer />
        </div>
      </div>
    )}
  />
)

NewLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NewLayout
