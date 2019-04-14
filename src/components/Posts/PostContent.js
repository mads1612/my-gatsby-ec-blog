import React from "react"
import { rhythm } from "../../styles/typography"

const PostContent = ({ content }) => (
  <div
    css={{ marginBottom: rhythm(1) }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostContent
