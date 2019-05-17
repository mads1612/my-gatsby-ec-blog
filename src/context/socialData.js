import React from "react"
import { FacebookSquare as Facebook } from "styled-icons/fa-brands/FacebookSquare"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import { Instagram } from "styled-icons/fa-brands/Instagram"
export const socialData = [
  {
    id: 1,
    icon: <Facebook size="30" className="icon facebook-icon" />,
    url: "https://www.facebook.com/RevChuckSmith",
    name: "Facebook account.",
  },
  {
    id: 2,
    icon: <Twitter size="30" className="icon twitter-icon" />,
    url: "https://www.twitter.com/eclecticcoding",
    name: "Twitter account.",
  },
  {
    id: 3,
    icon: <Instagram size="30" className="icon instagram-icon" />,
    url: "https://www.instagram.com/webrev",
    name: "Instagram account.",
  },
]
