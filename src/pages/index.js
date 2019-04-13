// ec-blog -- /src/components/pages/index.js.
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { BREAKPOINTS, SPACING } from "../constants"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { HomeHeader, Banner } from "../components/Hero"
import QuickInfo from "../components/SectionInfo/QuickInfo"

import Container from "../components/Container"
import PostHeader from "../components/Posts/PostHeader"
import PostDate from "../components/Posts/PostDate"

const PostBox = styled.div`
  display: flex;
  margin-top: 0.5rem;
  @media (max-width: ${BREAKPOINTS.alpha}) {
    flex-flow: row wrap;
  }
`

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
  @media (max-width: ${BREAKPOINTS.alpha}) {
    margin-bottom: ${SPACING.m};
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
        <Layout location={this.props.location} title={siteTitle}>
          <HomeHeader fluid={data.hero.edges[0].node.fluid}>
            <Banner
              title="Eclectic"
              subtitle="a broad and diverse range of sources"
            >
              {/* <Link to="/menu/" style={{ textDecoration: "none" }}>
              <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
            </Link> */}
            </Banner>
          </HomeHeader>
          <QuickInfo />
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Container>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const postSlug = node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <PostHeader {...{ postSlug, title }} />
                  <PostDate date={node.frontmatter.date} />
                  <PostBox>
                    <PostImage>
                      <Img
                        style={{ borderRadius: `5%` }}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </PostImage>
                    <PostText>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
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
      filter: { original: { src: { regex: "/computer-desk/" } } }
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
