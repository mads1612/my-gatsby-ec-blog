import React from "react"
import { breakpoints } from "../utils/styles"
import { createMediaQuery } from "../utils/styles"

const Container = ({ children }) => (
  <div
    css={{
      marginLeft: "auto",
      marginRight: "auto",
      width: "80%",
      [createMediaQuery(`${breakpoints.bravo}`)]: {
        width: "70%",
      },
      [createMediaQuery(`${breakpoints.charlie}`)]: {
        width: "60%",
      },
      [createMediaQuery(`${breakpoints.delta}`)]: {
        width: "50%",
      },
    }}
  >
    {children}
  </div>
)

export default Container
