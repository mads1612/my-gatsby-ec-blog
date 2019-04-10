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
            Pariatur elit laborum dolor laborum tempor. Exercitation dolor ea
            voluptate aliquip sunt. Elit qui do enim proident sunt adipisicing
            sint est anim elit enim aliqua. Elit et cillum id laboris magna id
            id ad culpa et ad voluptate. Minim nulla minim pariatur aliquip elit
            sint dolor veniam ex labore.
          </p>
          <Link to="/" style={{ textDecoration: `none` }}>
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
