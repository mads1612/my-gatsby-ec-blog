import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { PurchaseTag } from "styled-icons/boxicons-solid/PurchaseTag"

import Layout from "../components/Layouts/Layout"
import List from "../components/List"
import { setRem, setColor } from "../utils/styles"

const ContentWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  h2 {
    margin-bottom: ${setRem(20)};
  }
  h3 {
    margin-bottom: ${setRem(10)};
    text-transform: capitalize;
  }
  ul {
    list-style-position: outside;
    list-style-image: none;
    list-style-type: circle;
    padding: 0 0 0 ${setRem(30)};
    margin: 0 0 1rem 0;
  }
`

const StyledTag = styled(PurchaseTag)`
  color: ${setColor.primaryBase};
  padding-right: ${setRem(10)};
`

const CategoryTemplate = props => {
  const {
    pageContext: { category },
    data: {
      allMarkdownRemark: { totalCount, edges },
    },
  } = props

  return (
    <>
      <Layout>
        <ContentWrapper>
          <h2>Posts in category</h2>
          <h3>
            <StyledTag size="30" />
            {category}
          </h3>
          <p className="meta">
            There {totalCount > 1 ? "are" : "is"} <strong>{totalCount}</strong>{" "}
            post{totalCount > 1 ? "s" : ""} in the category.
          </p>
          <List edges={edges} />
        </ContentWrapper>
      </Layout>
    </>
  )
}

CategoryTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default CategoryTemplate

export const categoryQuery = graphql`
  query PostsByCategory($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            category
          }
        }
      }
    }
  }
`
