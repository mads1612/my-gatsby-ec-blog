import styled from "styled-components"
import { styles } from "../utils"
import { setBorder } from "../utils/styles"

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${setBorder({ color: `${styles.colors.white}` })};
  margin-top: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.white};
    color: ${styles.colors.black};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.black};
  ${setBorder({ color: `${styles.colors.black}` })};
  &:hover {
    background: ${styles.colors.black};
    color: ${styles.colors.primaryBase};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
