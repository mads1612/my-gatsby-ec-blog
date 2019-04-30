import React from "react"
import styled from "styled-components"

import { setColor } from "../../utils/styles"

export function QuickInfo({ message }) {
  return (
    <QuickInfoWrapper>
      <p className="text">{message}</p>
    </QuickInfoWrapper>
  )
}

QuickInfo.defaultProps = {
  message: "text message",
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${setColor.primaryDarkest};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
