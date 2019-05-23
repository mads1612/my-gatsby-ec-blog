import React from "react"

import styled from "styled-components"
import { setColor, setTransition } from "../utils/styles"

import ThemeContext from "../context"

export default function Footer() {
  return (
    <ThemeContext.Consumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="title">Eclectic Saddlebag</div>
            <div className="icons">
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
            <p className="copyright">
              Copyright &copy; {new Date().getFullYear()} Eclectic Saddlebag -
              Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </FooterWrapper>
        )
      }}
    </ThemeContext.Consumer>
  )
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
    margin: 20px 20px 0 0;
    justify-content: space-between;
    transition: ${setTransition({ time: "0.3s" })};
  }
  .icon:hover {
    /* color: ${setColor.white}; */
    cursor: pointer;
  }
  .facebook-icon {
    color: ${setColor.white};
    transition: ${setTransition({ time: "0.3s" })};
  }
  .facebook-icon:hover {
    color: #3b5998;
    cursor: pointer;
  }
  .twitter-icon {
    color: ${setColor.white};
    transition: ${setTransition({ time: "0.3s" })};
  }
  .twitter-icon:hover {
    color: #1da1f2;
    cursor: pointer;
  }
  .instagram-icon {
    color: ${setColor.white};
    transition: ${setTransition({ time: "0.3s" })};
  }
  .instagram-icon:hover {
    color: #e95950;
    cursor: pointer;
  }
  .copyright {
    color: ${setColor.white};
    text-align: center;
    margin: 1rem 0;
    font-size: 0.8rem;
    text-shadow: none;
  }
  a {
    color: ${setColor.primaryLightest};
  }
  .title {
    text-align: center;
    width: 20rem;
    color: ${setColor.primaryLightest};
    font-style: oblique;
    padding: 0.3rem 1rem;
    margin: 0 auto 1rem auto;
    font-size: 1.5rem;
  }
`
