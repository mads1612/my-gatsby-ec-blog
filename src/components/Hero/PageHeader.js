// ec-blog -- /src/components/Hero/Header.js.
import React from "react"
import PageHero from "./PageHero"
import pageImg from "../../images/blog-desk.jpg"
import PageBanner from "./PageBanner"

const PageHeader = () => {
  return (
    <PageHero img={pageImg}>
      <PageBanner title={title} />
    </PageHero>
  )
}

export default PageHeader
