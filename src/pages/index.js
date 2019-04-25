// ec-blog -- /src/components/pages/index.js.
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { breakpoints, setRem } from "../utils/styles"
import Seo from "../components/Seo"
import Layout from "../components/Layouts/Layout"
import { HomeHeader } from "../components/Hero"
import QuickInfo from "../components/SectionInfo/QuickInfo"

import { GlobalStyles } from "../utils/GlobalStyles"
import { Title } from "../components/SectionInfo/Title"
import Container from "../components/Container"
import PostHeader from "../components/Posts/PostHeader"
import PostDate from "../components/Posts/PostDate"
import PostContent from "../components/Posts/PostContent"

const PostBox = styled.div`
  display: flex;
  margin-top: 0.5rem;
  @media (max-width: ${breakpoints.alpha}) {
    flex-flow: row wrap;
  }
`

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
  @media (max-width: ${breakpoints.alpha}) {
    margin-bottom: ${setRem(20)};
  }
`

const PostText = styled.div`
  flex: 75%;
  margin-bottom: 4rem;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <GlobalStyles />
        <Layout location={this.props.location} title={siteTitle}>
          <Seo title={siteTitle} keywords={["About", "Chuck Smith"]} />
          <HomeHeader fluid={data.hero.edges[0].node.fluid} />
          <QuickInfo />
          <Title
            style={{ paddingTop: "1rem" }}
            message={""}
            title={"Latest Articles"}
          />
          <Container>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const postSlug = node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <PostHeader {...{ postSlug, title }} />
                  <PostDate
                    date={node.frontmatter.date}
                    author={node.frontmatter.author}
                    readTime={node.timeToRead}
                  />
                  <PostBox>
                    <PostImage>
                      <Img
                        style={{ borderRadius: `5%` }}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </PostImage>
                    <PostText>
                      <PostContent content={node.excerpt} />
                    </PostText>
                  </PostBox>
                </div>
              )
            })}
          </Container>
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/travel-bag/" } } }
    ) {
      edges {
        node {
          fluid(
            duotone: { highlight: "#000000", shadow: "#222222", opacity: 20 }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
