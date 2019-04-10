import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "typeface-merriweather"

import Navbar from "../components/Navbar"
// import Container from "../components/Container"
import Footer from "./Footer"

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
`

const Layout = ({ children }) => (
  <div>
    <Body>
      <Navbar />
      {children}
    </Body>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
