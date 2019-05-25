import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import Sidebar from '../Navbar/Sidebar'
import Footer from '../Footer'

import styled from 'styled-components'
import { GlobalStyles } from '../../utils'

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
        <Sidebar />
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
