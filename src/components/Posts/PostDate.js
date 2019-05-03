import React from "react"
import { Link } from "gatsby"
import { breakpoints, media, setColor, setRem } from "../../utils/styles"
import styled from "styled-components"

import { Calendar } from "styled-icons/boxicons-regular/Calendar"
import { User } from "styled-icons/fa-solid/User"
import { PurchaseTag } from "styled-icons/boxicons-solid"

const MetaBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 0;
  @media (max-width: ${breakpoints.alpha}) {
    margin-left: ${setRem(2)};
    font-size: 0.7rem;
    padding-right: ${setRem(2)};
  }
  ${media.tablet`font-size: ${setRem(14)}, padding-right: ${setRem(10)}`};
`

const DateBox = styled.div`
  font-size: 0.8rem !important;
  padding-right: ${setRem(20)};
  margin-bottom: 0;
  @media (max-width: ${breakpoints.alpha}) {
    padding-right: ${setRem(2)};
    font-size: 0.7rem;
  }
  ${media.tablet`font-size: ${setRem(14)}, padding-right: ${setRem(10)}`};
`

const AuthorBox = styled.div`
  padding: 0 ${setRem(20)};
  font-size: 0.8rem;
  margin-bottom: 0;
  ${media.phone`font-size: ${setRem(14)}, padding-right: ${setRem(2)}`};
  ${media.tablet`font-size: ${setRem(14)}, padding-right: ${setRem(2)}`};
`

const CatBox = styled.div`
  padding-right: ${setRem(20)};
  font-size: 0.8rem !important;
  margin-bottom: 0;
  text-transform: capitalize;
  ${media.phone`display: none`};
  ${media.tablet`font-size: ${setRem(14)}, padding-right: ${setRem(2)}`};
  ${media.desktop`font-size: ${setRem(14)}, padding-right: ${setRem(2)}`};
`

const PostDate = ({ date, author, category }) => (
  <div>
    <MetaBox>
      <DateBox>
        <Calendar size="15" style={{ color: `${setColor.primaryDark}` }} />{" "}
        {date}
      </DateBox>
      <AuthorBox>
        <User size="15" style={{ color: `${setColor.primaryDark}` }} /> {author}
      </AuthorBox>
      <CatBox>
        <PurchaseTag size="15" style={{ color: `${setColor.primaryDark}` }} />{" "}
        {""}
        <Link to={`/category/${category.split(" ").join("-")}`}>
          {category}
        </Link>
      </CatBox>
    </MetaBox>
  </div>
)

export default PostDate
