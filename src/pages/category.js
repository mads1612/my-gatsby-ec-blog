import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Layout from "../components/Layouts/Layout"

import { PurchaseTag } from "styled-icons/boxicons-solid/PurchaseTag"
import List from "../components/List"
import { setColor, setRem } from "../utils/styles"
// import Seo from "../components/Seo"

const StyledTag = styled(PurchaseTag)`
  color: ${setColor.primaryBase};
  padding-right: ${setRem(10)};
`

const ContentWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  h1 {
    margin: ${setRem(20)} 0;
  }
  h2 {
    margin-bottom: ${setRem(20)};
  }
  h3 {
    margin-bottom: ${setRem(10)};
  }
  ul {
    list-style-position: outside;
    list-style-image: none;
    list-style-type: circle;
    padding: 0 0 0 ${setRem(30)};
    margin: 0 0 1rem 0;
  }
`

const CategoryPage = props => {
  const {
    data: {
      posts: { edges: posts },
    },
  } = props

  // Create category list
  const categories = {}
  posts.forEach(edge => {
    const {
      node: {
        frontmatter: { category },
      },
    } = edge

    if (category && category != null) {
      if (!categories[category]) {
        categories[category] = []
      }
      categories[category].push(edge)
    }
  })

  const categoryList = []

  for (var key in categories) {
    categoryList.push([key, categories[key]])
  }

  return (
    <React.Fragment>
      <Layout>
        <ContentWrapper>
          <h1>Posts by categories</h1>
          {categoryList.map(item => (
            <section key={item[0]}>
              <h2>
                <StyledTag size="30" />
                {item[0]}
              </h2>
              <List edges={item[1]} />
            </section>
          ))}
        </ContentWrapper>
      </Layout>
    </React.Fragment>
  )
}

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CategoryPage

//eslint-disable-next-line no-undef
export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
          }
        }
      }
    }
  }
`
