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
      <PostWrapper
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
      </PostWrapper>
    </Body>
    <Footer />
  </div>
)

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout

const PostWrapper = styled.div`
  max-width: 800;
`
