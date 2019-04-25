import styled from "styled-components"
import { setColor, setBorder, setTransition } from "../utils/styles"

const BannerButton = styled.button`
  display: block;
  color: ${setColor.white};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${setBorder({ color: `${setColor.white}` })};
  margin-top: 1rem;
  ${setTransition({ time: "0.4s" })};
  &:hover {
    background: ${setColor.white};
    color: ${setColor.black};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${setColor.black};
  ${setBorder({ color: `${setColor.black}` })};
  &:hover {
    background: ${setColor.black};
    color: ${setColor.primaryBase};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
