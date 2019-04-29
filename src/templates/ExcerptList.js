import React, { Fragment } from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import styled from "styled-components"
import ExcerptedPost from "../components/Posts/ExcerptedPost"
import Pagination from "../components/Posts/Pagination"

import Seo from "../components/Seo"
// import { styles } from "../utils"
import PostLayout from "../components/Layouts/PostLayout"
import useSiteMetadata from "../components/hooks/useSiteMetadata"

// import { Title } from "../components/SectionInfo/Title"
// import Container from "../components/Container"

const ExcerptList = ({ data, ...props }) => {
  const { index, totalPages } = props.pageContext
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  const { title } = useSiteMetadata()

  return (
    <Fragment>
      <Seo title={title} keywords={["Chuck Smith"]} />
      <PostLayout style={{}}>
        <div>
          {posts.map(post => (
            <ExcerptedPost key={post.frontmatter.slug} post={post} />
          ))}
        </div>
      </PostLayout>
      <Pagination {...{ index, totalPages }} />
    </Fragment>
  )
}

export default ExcerptList

export const query = graphql`
  query ExcerptListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            author
          }
        }
      }
    }
  }
`