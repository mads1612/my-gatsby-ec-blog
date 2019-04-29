import React from "react"
import { Link } from "gatsby"
import imgAuthor from "../../images/chuck.jpg"
import styled from "styled-components"
import { setRem } from "../../utils/styles"

const Author = () => {
  return (
    <AuthorBox>
      <MyPic src={imgAuthor} alt="" />
      <AuthorBio>
        <h3>About Me</h3>
        <div>
          Here is my obligatory who I am block. A lover of technology, every
          thing web related, and bright and sunny days. I listen to music all
          the time, and as you can tell by my profile picture, my head is really
          round. If you want to know more visit the{" "}
          <Link to="/about">About</Link> page.
        </div>
      </AuthorBio>
    </AuthorBox>
  )
}

export default Author

const AuthorBox = styled.div`
  margin-top: ${setRem(80)};
  margin-bottom: ${setRem(20)};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: ${setRem(20)};
  padding-top: ${setRem(60)};
`

const MyPic = styled.img`
  display: "block";
  width: 100%;
  max-width: 180px;
  height: auto;
  border-radius: 50%;
  margin-left: "auto";
  margin-right: "auto";
`

const AuthorBio = styled.div`
  margin-top: ${setRem(10)};
  margin-bottom: ${setRem(20)};
`
