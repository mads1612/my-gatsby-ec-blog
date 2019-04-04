import React, { Fragment } from "react"
import { Link } from "gatsby"
import { COLORS } from "../constants"
import { rhythm } from "../styles/typography"

// TODO rebuild links system

const postLinkStyles = {
  display: "block",
  color: COLORS.black,
  "&:hover": {
    color: COLORS.teal,
  },
}

const PostHeader = ({ postSlug, title }) => {
  const Wrap = postSlug ? Link : Fragment
  const wrapProps = postSlug ? { css: postLinkStyles, to: postSlug } : {}

  return (
    <header css={{ marginBottom: rhythm(0) }}>
      <Wrap {...wrapProps}>
        <h2 css={{ marginBottom: 0 }}>{title}</h2>
      </Wrap>
    </header>
  )
}

export default PostHeader
