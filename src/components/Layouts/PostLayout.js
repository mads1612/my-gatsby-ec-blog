import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navbar from "../Navbar/Navbar"
import Image from "../hooks/blogimage"
import Footer from "../Footer"
import { GlobalStyles } from "../../utils"

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
`

const PostLayout = ({ children }) => (
  <div>
    <Body>
      <Navbar />
      <Image />
      <GlobalStyles />
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
)

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout
