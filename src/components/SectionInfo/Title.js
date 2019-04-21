import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3>{message}</h3>
      <h1>{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}
Title.defaultProps = {
  message: "our message",
  title: "our title",
}

const TitleWrapper = styled.div`
  text-align: center;
  h3 {
    ${styles.setFont.slanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.primaryLight};
  }
  h1 {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    margin-top: 1rem;
    /* text-transform: uppercase; */
  }
  .underline {
    width: 10rem;
    height: 0.2rem;
    background: ${styles.colors.primaryLight};
    margin: 0.5rem auto;
  }
`
