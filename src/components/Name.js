import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../constants"

const Base = styled.a`
  font-size: 20pt;
  font-family: 'Pacifico';
  color: ${COLORS.black};
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
  &:hover {
    color: ${COLORS.primarylightActive}
  }

  ${props =>
    props.dark &&
    css`
      color: #444;
    `}
  ${props =>
    props.block &&
    css`
      display: block;
    `}
  ${props =>
    props.small &&
    css`
      font-size: 1em;
    `}
  ${props =>
    props.big &&
    css`
      font-size: 2em;
    `}
`

class Name extends React.Component {
  render() {
    return (
      <Base {...this.props} href="/">
        Eclectic Saddlebag
      </Base>
    )
  }
}

export default Name
