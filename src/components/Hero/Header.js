// ec-blog -- /src/components/Hero/Header.js.
import React from "react"
import Hero from "./Hero"
import homeImg from "../../images/travel-bag.jpg"
import Banner from "./Banner"

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="Eclectic Saddlebag"
        text="The home for my random thoughts, interest, and ideas."
      />
    </Hero>
  )
}

export default Header
