import React from "react"
import styled, { css, keyframes } from "styled-components"
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../utils/styles"

const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
 opacity:0;
 transform:translateY(${start})
}
50%{
 opacity:0.5;
 transform:translateY(${point})
}
100%{
 opacity:1;
 transform:translateY(${end})
}

`
  return css`
    animation: ${animation} 3s ease-in-out;
  `
}
const Banner = ({ className, title }) => {
  return (
    <div className={className}>
      <h1>
        <span>{title}</span>{" "}
      </h1>
    </div>
  )
}

const PageBannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  ${setBorder({ width: "6px", color: setColor.neutralLight })};
  text-align: center;
  padding: ${setRem(30)} ${setRem(30)};
  ${setLetterSpacing(3)}
  color: ${setColor.white};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColor.primaryBase};
    ${media.tablet`h1 {font-size: ${setRem(24)};}`};
    span {
      color: ${setColor.white};
    }
  }
  ${media.tablet`
    ${setBorder({ width: "6px", color: setColor.neutralLight })}
    padding: ${setRem(20)} ${setRem(20)};
    h1{
        font-size: ${setRem(24)};
    }`}

  h1 {
   ${fadeIn("100%", "-10%", "0")}
  }
`
export default PageBannerWrapper
