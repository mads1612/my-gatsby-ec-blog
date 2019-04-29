import React from "react"
import { setRem } from "../../utils/styles"

const PostContent = ({ content }) => (
  <div
    css={{ marginBottom: `${setRem(20)}` }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostContent
