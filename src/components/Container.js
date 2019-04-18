import React from "react"
import { styles } from "../utils"
import { createMediaQuery } from "../utils/styles"

const Container = ({ children }) => (
  <div
    css={{
      marginLeft: "auto",
      marginRight: "auto",
      width: "80%",
      [createMediaQuery(`${styles.breakpoints.bravo}`)]: {
        width: "70%",
      },
      [createMediaQuery(`${styles.breakpoints.charlie}`)]: {
        width: "60%",
      },
      [createMediaQuery(`${styles.breakpoints.delta}`)]: {
        width: "50%",
      },
    }}
  >
    {children}
  </div>
)

export default Container
