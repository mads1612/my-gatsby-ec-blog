import React, { Fragment } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layouts/Layout"
import { setRem } from "../utils/styles"
import { formatStrForPath } from "../utils/formatStr"

const linkStyles = css`
  display: block;
  margin-bottom: ${setRem(8)};
`

const ListWrapper = styled.div`
  margin: 0 auto;
`

const AllCategoriesOrTags = ({ pageContext }) => {
  const { categories, tags } = pageContext

  // Has to be one or the other
  const title = tags ? "All Tags" : "All Categories"
  const itemType = tags ? "tags" : "categories"
  const items = tags ? tags : categories

  return (
    <Fragment>
      <Seo title={title} />
      <Layout>
        <h3 style={{ margin: "0 auto", marginBottom: `${setRem(20)}` }}>
          {title}
        </h3>
        <ListWrapper>
          {items.map(item => (
            <Link
              key={item}
              css={linkStyles}
              to={`${itemType}/${formatStrForPath(item)}`}
            >
              {item}
            </Link>
          ))}
        </ListWrapper>
      </Layout>
    </Fragment>
  )
}

export default AllCategoriesOrTags
