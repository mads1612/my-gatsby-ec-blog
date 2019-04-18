import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

import { styles } from "../../utils"

export default function NavbarHeader({ handleNavbar }) {
  //   const siteTitle = useSiteMetadata()
  return (
    <HeaderWrapper>
      <Link
        to="/"
        style={{
          color: `${styles.colors.neutralDarkest}`,
          fontSize: `1.5rem`,
          fontWeight: 700,
        }}
      >
        Eclectic Saddlebag
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.primaryBase};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`
