import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"

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
    color: ${styles.colors.neutralLightest};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.75rem" })};
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
  h3 {
    color: ${styles.colors.neutralLightest};
    ${styles.setFont.slanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
Banner.defaultProps = {
  title: "default title",
}
