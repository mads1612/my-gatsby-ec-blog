import styled from "styled-components"
import { setColor } from "../../utils/styles"

export const Section = styled.section`
  background: ${props => props.color || setColor.white};
  padding: 2rem;
  width: 100vw;
  margin: 0 auto;
`
