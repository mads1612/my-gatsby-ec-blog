import React, { Component } from "react"
import { linkData } from "./linkData"
import { socialData } from "./socialData"
const ThemeContext = React.createContext()

class ThemeProvider extends Component {
  state = {
    sidebarOpen: false,
    links: linkData,
    socialIcons: socialData,
  }
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const ThemeConsumer = ThemeContext.Consumer

export { ThemeProvider, ThemeConsumer }
