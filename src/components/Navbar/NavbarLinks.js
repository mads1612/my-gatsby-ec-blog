import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      { id: 0, path: "/", name: "home" },
      { id: 1, path: "/", name: "about" },
      { id: 2, path: "/", name: "contact" },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  margin-bottom: 0;
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 1rem 1rem 0.5rem 1rem;
    color: ${styles.colors.neutralDarkest};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.neutralLightest};
      color: ${styles.colors.primaryBase};
      padding: 0.5rem 1rem 0rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "180px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "0.4s" })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.neutralLighter};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
