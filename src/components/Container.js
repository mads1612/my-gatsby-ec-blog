import React from "react"
import { BREAKPOINTS } from "../constants"
import { createMediaQuery } from "../utils/styles"

const Container = ({ children }) => (
  <div
    css={{
      marginLeft: "auto",
      marginRight: "auto",
      width: "80%",
      [createMediaQuery(BREAKPOINTS.bravo)]: {
        width: "70%",
      },
      [createMediaQuery(BREAKPOINTS.charlie)]: {
        width: "60%",
      },
      [createMediaQuery(BREAKPOINTS.delta)]: {
        width: "50%",
      },
    }}
  >
    {children}
  </div>
)

export default Container
