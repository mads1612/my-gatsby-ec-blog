import styled from "styled-components"
import { setFlex, setBackground } from "../../utils/styles"

const PageHero = styled.header`
  min-height: 40vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0.4)" })};
  ${setFlex()};
`
export default PageHero
