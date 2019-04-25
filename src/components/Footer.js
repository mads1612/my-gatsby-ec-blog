import React, { Component } from "react"
import styled from "styled-components"
import { setColor, setTransition } from "../utils/styles"

import { FacebookSquare } from "styled-icons/fa-brands/FacebookSquare"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import { Instagram } from "styled-icons/fa-brands/Instagram"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FacebookSquare size="24" className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <Twitter size="24" className="icon twitter-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 3,
        icon: <Instagram size="24" className="icon instagram-icon" />,
        path: `https://www.facebook.com`,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">Eclectic Saddlebag</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()} Eclectic Saddlebag - Built
          with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${setColor.black};
  .icons {
    width: 8rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${setColor.white};
    font-size: 0.5rem;
    ${setTransition({ time: "0.3s" })};
    &:hover {
      color: ${setColor.vividDarkest};
    }
  }
  .copyright {
    color: ${setColor.white};
    text-align: center;
    margin: 1rem 0;
    font-size: 0.8rem;
    text-shadow: none;
  }
  .title {
    text-align: center;
    width: 20rem;
    color: ${setColor.primaryBase};
    font-style: oblique;
    padding: 0.3rem 1rem;
    margin: 0 auto 1rem auto;
    font-size: 1.5rem;
  }
`
