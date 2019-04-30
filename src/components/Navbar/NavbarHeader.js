import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MenuAltRight } from "styled-icons/boxicons-regular/MenuAltRight"

import { setRem, setColor } from "../../utils/styles"

export default function NavbarHeader({ handleNavbar }) {
  //   const siteTitle = useSiteMetadata()
  return (
    <HeaderWrapper className="navbar-fixed-top">
      <Link
        to="/"
        style={{
          color: `${setColor.neutralDarkest}`,
          fontSize: `${setRem(25)}`,
          fontWeight: 700,
          marginLeft: `${setRem(20)}`,
        }}
      >
        Eclectic Saddlebag
      </Link>
      <MenuAltRight
        size="40"
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  .navbar-fixed-top {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
  padding: 0.6rem ${setRem(20)};
  display: flex;
  align-items: center;
  margin-bottom: 0;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${setColor.primaryBase};
    cursor: pointer;
  }
  @media (min-width: 760px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem ${setRem(1)};
  }
`
