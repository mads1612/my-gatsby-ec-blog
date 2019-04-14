import React, { Fragment } from "react"
import { Link } from "gatsby"
// import { COLORS } from "../../constants"
import { rhythm } from "../../styles/typography"
import styled from "styled-components"
import { styles } from "../../utils"

// TODO rebuild links system

const postLinkStyles = {
  display: "block",
  color: `${styles.colors.neutralDark}`,
}

const TitleWrapper = styled.h2`
  &:hover {
    color: ${styles.colors.primaryBase};
  }
`

const PostHeader = ({ postSlug, title }) => {
  const Wrap = postSlug ? Link : Fragment
  const wrapProps = postSlug ? { css: postLinkStyles, to: postSlug } : {}

  return (
    <header css={{ marginBottom: rhythm(0) }}>
      <Wrap {...wrapProps}>
        <TitleWrapper>{title}</TitleWrapper>
      </Wrap>
    </header>
  )
}

export default PostHeader
