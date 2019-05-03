import React from "react"
// import { Link } from "gatsby"
import { setRem } from "../../utils/styles"

import PostDate from "./PostDate"
import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import PostCategoriesOrTags from "./PostCategoriesOrTags"

const ExcerptedPost = ({ post }) => {
  const {
    excerpt,
    slug,
    timeToRead,
    frontmatter: { categories, date, title, author },
  } = post

  return (
    <div css={{ marginBottom: `1rem` }}>
      <PostHeader {...{ slug, title }} />

      <PostDate date={date} author={author} readTime={timeToRead} />
      <PostContent content={excerpt} />

      <div css={{ marginBottom: `${setRem(20)}` }} />

      {categories && (
        <PostCategoriesOrTags items={categories} type="category" />
      )}

      {tags && <PostCategoriesOrTags items={tags} type="tag" />}
    </div>
  )
}

export default ExcerptedPost
