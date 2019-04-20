// Color Palette 2
export const colors = {
  // colors
  black: "#333",
  white: "#ffffff",

  // Neutrals - most text, backgrounds, borders, secondary buttons and links
  neutralLightest: "#f6f6f6",
  neutralLighter: "#bcccdc",
  neutralLight: "#9fb3c8",
  neutralBase: "#627d98",
  neutralDark: "#486581",
  neutralDarker: "#334e68",
  neutralDarkest: "#102a43",

  // Primary's - actions, navigation, icons, borders, or emphasize text.
  primaryLightest: "hsl(205, 84%, 74%)",
  primaryLighter: "hsl(205, 74%, 65%)",
  primaryLight: "hsl(205, 65%, 55%)",
  primaryBase: "hsl(205, 76%, 39%)",
  primaryDark: "hsl(205, 82%, 33%)",
  primaryDarker: "hsl(205, 87%, 29%)",
  primaryDarkest: "hsl(205, 100%, 21%)",

  // Vivid - actions, navigation, icons, borders, or emphasize text.
  vividLightest: "#8D2B0B",
  vividLighter: "#B44D12",
  vividLight: "#CB6E17",
  vividBase: "#DE911D",
  vividDark: "#F7C948",
  vividDarker: "#FADB5F",
  vividDarkest: "#FCE588",

  // Supporting - standout section
  supportingDimLightest: "#87EAF2",
  supportingDimLighter: "#54D1DB",
  supportingDimLight: "#38BEC9",
  supportingDimBase: "#2CB1BC",
  supportingDimDark: "#14919B",
  supportingDimDarker: "#0E7C86",
  supportingDimDarkest: "#0A6C74",
  supportingBrightLightest: "#F29B9B",
  supportingBrightLighter: "#E66A6A",
  supportingBrightLight: "#D64545",
  supportingBrightBase: "#BA2525",
  supportingBrightDark: "#A61B11",
  supportingBrightDarker: "#911111",
  supportingBrightDarkest: "#780A0A",
}

export const breakpoints = {
  alpha: "481px",
  bravo: "769px",
  charlie: "1025px",
  delta: "1350px",
}

export const spacing = {
  default: "20px",
  xxs: "2px",
  xs: "5px",
  s: "10px",
  m: "20px",
  l: "40px",
  xl: "80px",
}

export const textSlanted = `font-family:'Caveat', cursive;`

export const transDefault = "transition:all 0.5s ease-in-out"

export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}

export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}

export const createMediaQuery = breakpoint =>
  `@media (min-width: ${breakpoint})`
