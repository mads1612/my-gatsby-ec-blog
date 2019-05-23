import React from "react"
import { Menu } from "styled-icons/boxicons-regular/Menu"

import styled from "styled-components"
import { setColor, setTransition } from "../../utils/styles"

import ThemeContext from "../../context"

export default function Navbar() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const { handleSidebar } = value
        return (
          <NavWrapper>
            <div className="nav-center">
              <Menu size="45" className="nav-icon" onClick={handleSidebar} />
              <h2>Eclectic Saddlebag</h2>
              <div className="social-icons">
                {value.socialIcons.map(item => (
                  <a
                    href={item.url}
                    key={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </NavWrapper>
        )
      }}
    </ThemeContext.Consumer>
  )
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${setColor.white};
  border-bottom: 3px solid ${setColor.primaryBase};
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    cursor: pointer;
  }
  .nav-icon:hover {
    color: red;
  }
  .icon {
    margin: 20px 20px 0 0;
    justify-content: space-between;
    transition: ${setTransition({ time: "0.3s" })};
  }
  .icon:active {
    color: #3b5998;
    cursor: pointer;
  }
  .facebook-icon {
    color: ${setColor.primaryBase};
    transition: ${setTransition({ time: "0.3s" })};
  }
  .facebook-icon:hover {
    color: #3b5998;
    cursor: pointer;
  }
  .twitter-icon {
    color: ${setColor.primaryBase};
    transition: ${setTransition({ time: "0.3s" })};
  }
  .twitter-icon:hover {
    color: #1da1f2;
    cursor: pointer;
  }
  .instagram-icon {
    color: ${setColor.primaryBase};
    transition: ${setTransition({ time: "0.3s" })};
  }
  .instagram-icon:hover {
    color: #e95950;
    cursor: pointer;
  }
`
