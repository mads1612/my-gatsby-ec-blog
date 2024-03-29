import React from "react"
import { Link, graphql } from "gatsby"

import pageImg from "../images/blog-desk.jpg"
import Navbar from "../components/Navbar"
import PostLayout from "../components/Layouts/PostLayout"
import SEO from "../components/Seo"
import Author from "../components/Posts/Author"
import Meta from "../components/Posts/PostDate"
import PageBanner from "../components/Hero/PageBanner"
import PageHero from "../components/Hero/PageHero"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <>
        <Navbar />
        <PageHero img={pageImg}>
          <PageBanner title={post.frontmatter.title} />
        </PageHero>

        <PostLayout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <div style={{ marginTop: "2rem" }}>
            <Meta
              date={post.frontmatter.date}
              author={post.frontmatter.author}
              category={post.frontmatter.category}
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Author />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </PostLayout>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        category
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
`
