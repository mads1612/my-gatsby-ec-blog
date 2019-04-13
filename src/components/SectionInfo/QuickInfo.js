import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { styles, Section, SectionButton } from "../../utils"
import { Title } from "./Title"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message={"Life is random"} title={"My Random Thoughts"} />
        <QuickInfoWrapper>
          <p className="text">
            Life is a journey, and along the way, we all collect thoughts,
            experiences, and learn. The word <em>eclectic</em> best describes
            this collection, a collection which can be described as random. Here
            on this site, you can learn a little about me, engage of the random
            thoughts I have, and experience a little of what I have.
          </p>
          <Link to="/about" style={{ textDecoration: `none` }}>
            <SectionButton style={{ margin: `2rem auto` }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.primaryDarkest};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
