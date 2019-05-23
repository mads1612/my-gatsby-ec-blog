import React from "react"
import styled from "styled-components"
import { setColor, setTransition } from "../../utils/styles"
import { Link } from "gatsby"
import ThemeContext from "../../context"

export default function Sidebar() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SideWrapper>
        )
      }}
    </ThemeContext.Consumer>
  )
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 89px;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${setColor.white};
  z-index: 1;
  border-right: 4px solid ${setColor.primaryBase};
  transition: ${setTransition({ time: "0.3s" })};
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: ${setColor.black};
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: ${setTransition({ time: "0.3s" })};
  }
  .sidebar-link:hover {
    background: ${setColor.primaryBase};
    color: ${setColor.white};
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`
