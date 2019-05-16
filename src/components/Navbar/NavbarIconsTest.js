import React, { Component } from "react"
import { FacebookSquare as Facebook } from "styled-icons/fa-brands/FacebookSquare"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import { Instagram } from "styled-icons/fa-brands/Instagram"
import styled from "styled-components"
import { setColor } from "../../utils/styles"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <Facebook className="icon facebook-icon" />,
        path: `https://www.facebook.com/RevChuckSmith`,
        name: `Facebook profile page`,
      },
      {
        id: 2,
        icon: <Twitter className="icon twitter-icon" />,
        path: `https://www.twitter.com/polishedwp`,
        name: `Twitter profile page`,
      },
      {
        id: 3,
        icon: <Instagram className="icon instagram-icon" />,
        path: `https://www.instagram.com/webrev`,
        name: `Instagram profile page`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper
        style={{
          marginBottom: 0,
          marginTop: -10,
        }}
      >
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            {item.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    margin-right: 1.5rem;
    margin-bottom: 0;
    padding-top: 0.5rem;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .icon:hover {
    color: ${setColor.vividDarkest};
  }
  display: none;
  @media (min-width: 768px) {
    width: 8rem;
    display: flex;
    justify-content: space-around;
  }
`
