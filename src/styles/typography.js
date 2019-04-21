import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"
import { styles } from "../utils"

fairyGatesTheme.fairyGatesTheme = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}
fairyGatesTheme.baseFontSize = "18px"
fairyGatesTheme.baseLineHeight = 1.75
fairyGatesTheme.scaleRatio = 2

fairyGatesTheme.overrideThemeStyles = () => ({
  a: {
    color: `${styles.colors.primaryBase}`,
    textDecoration: "none",
    backgroundImage: "none",
    textShadow: "none",
  },
  blockquote: {
    borderLeft: `0.3rem solid ${styles.colors.primaryBase}`,
    color: `${styles.colors.primaryBase}`,
    backgroundColor: `${styles.colors.neutralLightest}`,
    padding: `2rem`,
  },
})

fairyGatesTheme.headerFontFamily = ["Merriweather", "sans-serif"]
fairyGatesTheme.bodyFontFamily = ["Merriweather", "sans-serif"]

const typography = new Typography(fairyGatesTheme)

//Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
