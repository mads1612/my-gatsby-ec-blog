import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import PostLayout from "../templates/PostLayout"

const About = ({ data }) => {
  const imgSrcPassion = data.passion.edges[0].node.original.src
  const imgSrcBuilding = data.building.edges[0].node.original.src

  return (
    <Fragment>
      <PostLayout>
        <Seo title="About" keywords={["About", "Chuck Smith"]} />
        <h1>About</h1>
        <p>
          <img
            css={{
              display: "block",
              borderRadius: "5%",
              padding: "1rem 2rem",
            }}
            src={imgSrcPassion}
            alt="Passion led us here."
          />
          I am a tech-enthusiasts from way back. My first web-site was a HTML
          3.2 frames site build exclusively in MS Notepad, a horrendous
          undertaking by todays standards. I have dabbled with many Content
          Management Systems (CMS) over the years:
          <ul style={{ paddingTop: "1rem" }}>
            <li>
              <a href="https://www.phpnuke.org/">PHPNuke</a>
            </li>
            <li>
              <a href="https://www.joomla.org/">Joomla</a> 1.0, 1.5, and 3.x
            </li>
            <li>
              <a href="https://www.wordpress.org/">WordPress</a> starting with
              2.7.x to present
            </li>
            <li>
              Currently, when developing WordPress sites, I almost exclusively
              use <a href="https://www.studiopress.org/">StudioPress'</a>{" "}
              Genesis Framework.
            </li>
          </ul>
        </p>
        <p>
          This site is my experiment with{" "}
          <a href="https://gatsby.org">GatsbyJS</a>, which I am learning to
          love, especially the concept of a website as React App.
        </p>
        <h2>Career</h2>
        <h3>Construction</h3>
        <img
          css={{
            display: "block",
            borderRadius: "5%",
            padding: "1rem 2rem",
          }}
          src={imgSrcBuilding}
          alt="Aerial view of buildings"
        />
        <p>
          I spend over twenty years in the construction industry learning to
          enhance drafting techniques, using the latest technologies:
        </p>
        <ul>
          <li>
            <a href="http://www.autodesk.com/">AutoCAD</a>
          </li>
          <li>
            <a href="https://www.ssdcp.com/">SSDCP</a> 1.0, 1.5, and 3.x
          </li>
          <li>
            <a href="https://www.bentley.com/en/products/product-line/structural-detailing-software/prosteel">
              ProSteel
            </a>
          </li>
          <li>
            <a href="https://www.www.tekla.com/us">Xsteel</a>
          </li>
        </ul>
        <p>
          In this field, I developed a desire to learn, fostering a passion for
          creativity in design.
        </p>
        <h3>Ministry</h3> // TODO Finish About Page
        <p>Each day,</p>
      </PostLayout>
    </Fragment>
  )
}

export default About

export const query = graphql`
  query aboutImageQuery {
    passion: allImageSharp(
      filter: { original: { src: { regex: "/passion-feet/" } } }
    ) {
      edges {
        node {
          id
          original {
            src
          }
        }
      }
    }
    building: allImageSharp(
      filter: { original: { src: { regex: "/buildings/" } } }
    ) {
      edges {
        node {
          id
          original {
            src
          }
        }
      }
    }
  }
`
