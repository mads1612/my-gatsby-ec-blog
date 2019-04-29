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
const Banner = ({ className, title, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>{" "}
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}
const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  ${setBorder({ width: "6px", color: setColor.neutralLight })};
  text-align: center;
  padding: ${setRem(40)} ${setRem(32)};
  ${setLetterSpacing(3)}
  color: ${setColor.white};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColor.primaryBase};
    span {
      color: ${setColor.white};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.neutralLight })};
    p {
      width: 75%;
    }`}


  h1 {
   ${fadeIn("100%", "-10%", "0")}
    /* animation */
  }
  .info {
      ${fadeIn("-100%", "10%", "0")}
      color: ${setColor.neutralLight};
      font-size: ${setRem(18)};

    /* animation */
  }
`
export default BannerWrapper
