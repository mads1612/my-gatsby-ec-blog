import React from "react"
import { Link } from "gatsby"
import { lighten } from "polished"
import { formatStrForPath } from "../../utils"
import { setColor, setFont } from "../../utils/styles"

const linkStyles = {
  display: "inline-block",
  backgroundColor: `${setColor.primaryBase}`,
  color: `${setColor.white}`,
  height: "24px",
  fontFamily: `${setFont.main}`,
  fontSize: "0.75rem",
  lineHeight: "24px",
  paddingLeft: `0.5rem`,
  paddingRight: `0.5rem`,
  marginRight: `0.25rem`,
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: lighten(0.1, `${setColor.primaryBase}`),
    color: `${setColor.white}`,
  },
}

const formatItemPath = (item, type) => {
  const paths = {
    category: "categories",
    tag: "tags",
  }
  const typePath = paths[type]

  return `${typePath}/${formatStrForPath(item)}`
}

const getTypeHeading = type => {
  const headings = {
    category: "Categories",
    tag: "Tags",
  }

  return headings[type]
}

const PostCategoriesOrTags = ({ items, type }) => (
  <div css={{ marginBottom: `1rem` }}>
    <div
      css={{
        fontFamily: `${setColor.main}`,
        fontSize: "0.75em",
        lineHeight: 1.8,
      }}
    >
      {getTypeHeading(type)}
    </div>
    {items.map(item => (
      <Link css={linkStyles} key={item} to={formatItemPath(item, type)}>
        {item}
      </Link>
    ))}
  </div>
)

export default PostCategoriesOrTags
