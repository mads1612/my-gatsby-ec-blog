import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"

const postLinkStyles = {
  display: "block",
  color: `${styles.colors.neutralDark}`,
}

const TitleWrapper = styled.h2`
  margin-bottom: 0;
  &:hover {
    color: ${styles.colors.primaryBase};
  }
`

const PostHeader = ({ postSlug, title }) => {
  const Wrap = postSlug ? Link : Fragment
  const wrapProps = postSlug ? { css: postLinkStyles, to: postSlug } : {}

  return (
    <header>
      <Wrap {...wrapProps}>
        <TitleWrapper>{title}</TitleWrapper>
      </Wrap>
    </header>
  )
}

export default PostHeader
