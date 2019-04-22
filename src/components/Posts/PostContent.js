import React from "react"

const PostContent = ({ content }) => (
  <div
    css={{ marginBottom: `1rem` }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostContent
