import React from "react"
import { breakpoints, setColor, setRem } from "../../utils/styles"
import styled from "styled-components"
import { FaCalendar } from "react-icons/fa/"
import { FaUser } from "react-icons/fa/"
import { FaClock } from "react-icons/fa/"

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
  @media (max-width: ${breakpoints.bravo}) {
    font-size: 0.8rem;
    padding-right: ${setRem(10)};
  }
`

const DateBox = styled.div`
  font-size: 0.8rem !important;
  padding-right: ${setRem(20)};
  margin-bottom: 0;
  @media (max-width: ${breakpoints.alpha}) {
    padding-right: ${setRem(2)};
    font-size: 0.7rem;
  }
  @media (max-width: ${breakpoints.bravo}) {
    padding-right: ${setRem(10)};
    font-size: 0.8rem;
  }
`

const AuthorBox = styled.div`
  padding: 0 ${setRem(20)};
  font-size: 0.8rem;
  margin-bottom: 0;
  @media (max-width: ${breakpoints.alpha}) {
    padding-right: ${setRem(2)};
    font-size: 0.7rem;
    display: none;
  }
  @media (max-width: ${breakpoints.bravo}) {
    padding-right: ${setRem(2)};
    font-size: 0.8rem;
  }
`

const TimeBox = styled.div`
  padding-right: ${setRem(20)};
  font-size: 0.8rem !important;
  margin-bottom: 0;
  @media (max-width: ${breakpoints.alpha}) {
    font-size: 0.7rem;
  }
  @media (max-width: ${breakpoints.bravo}) {
    font-size: 0.8rem;
  }
`

const PostDate = ({ date, author, readTime }) => (
  <div>
    <MetaBox>
      <DateBox>
        <FaCalendar style={{ color: `${setColor.primaryBase}` }} /> {date}
      </DateBox>
      <AuthorBox>
        <FaUser style={{ color: `${setColor.primaryBase}` }} /> {author}
      </AuthorBox>
      <TimeBox>
        <FaClock style={{ color: `${setColor.primaryBase}` }} /> {""}
        {readTime} min to read
      </TimeBox>
    </MetaBox>
  </div>
)

export default PostDate
