import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { setColor } from "../../utils/styles"

const postLinkStyles = {
  display: "block",
  color: `${setColor.neutralDark}`,
}

const TitleWrapper = styled.h2`
  margin-bottom: 0;
  &:hover {
    color: ${setColor.primaryBase};
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
