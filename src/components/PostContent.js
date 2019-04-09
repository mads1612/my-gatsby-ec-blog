import React from "react"
import { rhythm } from "styled-component"

// TODO use rhythm
const PostContent = ({ content }) => (
  <div
    css={{ marginBottom: rhythm() }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostContent
