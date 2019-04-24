import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GlobalStyles } from "../../utils"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer"

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <div>
      <Body>
        <Navbar />
        {children}
      </Body>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
