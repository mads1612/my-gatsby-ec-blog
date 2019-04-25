import React from "react"
import styled from "styled-components"
import { colors, setFont, setLetterSpacing } from "../../utils/styles"

export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  h1 {
    color: ${colors.neutralLightest};
    font-size: 3rem;
    text-transform: uppercase;
    ${setLetterSpacing(14)};
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
  h3 {
    color: ${colors.neutralLightest};
    ${setFont.slanted};
    ${setLetterSpacing()};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
Banner.defaultProps = {
  title: "default title",
}
