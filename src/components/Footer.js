import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../utils"

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
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
  background: ${styles.colors.black};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.white};
    font-size: 1.3rem;
    ${styles.transObject({ time: "0.4s" })};
    &:hover {
      color: ${styles.colors.vividDarkest};
    }
  }
  .copyright {
    color: ${styles.colors.white};
    text-align: center;
    margin: 1rem 0;
    font-size: 0.8rem;
    text-shadow: none;
  }
  .title {
    text-align: center;
    width: 20rem;
    color: ${styles.colors.primaryBase};
    font-style: oblique;
    padding: 0.3rem 1rem;
    margin: 0 auto 1rem auto;
    font-size: 1.5rem;
    /* ${styles.border({ color: `${styles.colors.primaryBase}` })} */
  }
`
