// my-ec-blog-default
import { css } from "styled-components"

// Color Palette 2
export const setColor = {
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
  primaryLightest: "hsl(205, 83%, 75%)",
  primaryLighter: "hsl(205, 74%, 65%)",
  primaryLight: "hsl(205, 65%, 55%)",
  primaryBase: "hsl(205, 76%, 39%)",
  primaryDark: "hsl(205, 80%, 31%)",
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

// Setter Functions
export const setFont = {
  main: "font-family: 'Merriweather', serif;",
  slanted: "font-family:'Caveat', cursive;",
}

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`
}

export const setBackground = ({
  img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  color = "rgba(0,0,0,0)",
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`
}

export const setRem = (number = 16) => {
  return `${number / 16}rem`
}

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`
}

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "red",
} = {}) => {
  return `border:${width} ${style} ${color}`
}

// Media
const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phablet: 572,
  phone: 376,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const transDefault = "transition:all 0.5s ease-in-out"

export const setTransition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

// TODO - remove breakpoints
export const breakpoints = {
  alpha: "481px",
  bravo: "769px",
  charlie: "1025px",
  delta: "1350px",
}

// TODO - remove media query
export const createMediaQuery = breakpoint =>
  `@media (min-width: ${breakpoint})`
