import React from "react"
import styled from "styled-components"
import Typist from "react-typist"
import { BREAKPOINTS } from "../../constants"

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  /* text-transform: capitalize; */
  font-family: "Raleway";
  @media (max-width: ${BREAKPOINTS.charlie}) {
    display: none;
  }
`

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong>{this.props.text.split(" ").slice(0, 1)}</strong>
          <br />
          {this.props.text
            .split(" ")
            .slice(1)
            .join(" ")}
        </StyledTypist>
      )
    } else {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong key={1}>Eclectic</strong>
          <br />
          <span key={2}>composed of elements drawn from various sources</span>
          <Typist.Backspace count={55} delay={1000} />
          <strong key={3}>Saddlebag</strong>
          <br />
          <span key={4}>a collection bag for travel</span>
          <Typist.Backspace count={36} delay={2000} />
          <strong key={1}>Eclectic</strong>
          <br />
          <strong key={1}>Saddlebag</strong>
          <br />
        </StyledTypist>
      )
    }
  }
}

export default HeroText
