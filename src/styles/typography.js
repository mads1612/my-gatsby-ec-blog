import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"
import { COLORS } from "../constants"

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
fairyGatesTheme.headerFontFamily = ["Merriweather", "sans-serif"]
fairyGatesTheme.bodyFontFamily = ["Merriweather", "sans-serif"]
fairyGatesTheme.googleFonts = [
  {
    name: "Merriweather",
    styles: ["300", "400", "500", "600", "700"],
  },
  {
    name: "Caveat",
    styles: ["300", "400", "500", "600", "700"],
  },
]

fairyGatesTheme.overrideThemeStyles = () => ({
  a: {
    color: COLORS.primaryBase,
    textDecoration: "none",
    backgroundImage: "none",
    textShadow: "none",
  },
  blockquote: {
    borderLeft: `0.3rem solid ${COLORS.primaryBase}`,
    color: COLORS.primaryBase,
    backgroundColor: COLORS.neutralLightest,
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
