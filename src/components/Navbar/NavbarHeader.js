import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MenuAltRight } from "styled-icons/boxicons-regular/MenuAltRight"

import { setColor } from "../../utils/styles"

export default function NavbarHeader({ handleNavbar }) {
  //   const siteTitle = useSiteMetadata()
  return (
    <HeaderWrapper>
      <Link
        to="/"
        style={{
          color: `${setColor.neutralDarkest}`,
          fontSize: `1.5rem`,
          fontWeight: 700,
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
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${setColor.primaryBase};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`
