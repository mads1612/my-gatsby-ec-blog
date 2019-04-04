import React from "react"
import useBuildTime from "./hooks/buildtime"

const Footer = () => {
  const time = useBuildTime()

  return (
    <>
      <div
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
        }}
      >
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> - Last updated on:{" "}
          {time}
        </p>
      </div>
    </>
  )
}

export default Footer
