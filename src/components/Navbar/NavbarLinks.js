import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { setColor, transDefault, setTransition } from "../../utils/styles"

export default class NavbarLinks extends Component {
  state = {
    links: [
      { id: 0, path: "/", name: "home" },
      { id: 1, path: "/blog", name: "blog" },
      { id: 2, path: "/about", name: "about" },
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
    margin-bottom: 1.2rem;
    padding: 1rem 1rem 0.5rem 1rem;
    color: ${setColor.neutralDarkest};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${transDefault};
    &:hover {
      background: ${setColor.neutralLightest};
      color: ${setColor.primaryBase};
      padding: 0.5rem 1rem 0rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "220px" : "0px")};
  overflow: hidden;
  ${setTransition({ time: "0.4s" })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    margin-bottom: 0;
    .nav-link:hover {
      background: ${setColor.neutralLighter};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
