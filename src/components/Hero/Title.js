import React from "react"
import styled from "styled-components"
import { setLetterSpacing, colors, setFont } from "../../utils/styles"
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
    ${setFont.slanted};
    ${setLetterSpacing(4)};
    font-size: 2rem;
    color: ${colors.mainYellow};
  }
  h1 {
    ${setLetterSpacing(4)};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${colors.mainYellow};
    margin: 0.5rem auto;
  }
`
