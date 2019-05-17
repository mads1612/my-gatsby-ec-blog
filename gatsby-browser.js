import React from "react"

import { ThemeProvider } from "./src/context/context"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
