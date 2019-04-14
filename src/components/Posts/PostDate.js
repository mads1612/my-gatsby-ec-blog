import React from "react"
import { COLORS, SPACING } from "../../constants"
import { BREAKPOINTS } from "../../constants"
// import { rhythm } from "../styles/typography"
import styled from "styled-components"
import { FaCalendar } from "react-icons/fa/"
import { FaUser } from "react-icons/fa/"
import { FaClock } from "react-icons/fa/"

// TODO add read time
// TODO add media breaks to meta

const MetaBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: ${SPACING.m};
  align-items: center;
  font-size: 0.8rem;
  @media (max-width: ${BREAKPOINTS.alpha}) {
    margin-left: ${SPACING.xxs};
    font-size: 0.7rem;
    padding-right: ${SPACING.xxs};
  }
  @media (max-width: ${BREAKPOINTS.bravo}) {
    font-size: 0.8rem;
    padding-right: ${SPACING.s};
  }
`

const DateBox = styled.div`
  padding-right: ${SPACING.m};
  @media (max-width: ${BREAKPOINTS.alpha}) {
    padding-right: ${SPACING.xxs};
    font-size: 0.7rem;
  }
  @media (max-width: ${BREAKPOINTS.bravo}) {
    padding-right: ${SPACING.s};
    font-size: 0.8rem;
  }
`

const AuthorBox = styled.div`
  padding: 0 ${SPACING.m};
  /* font-size: 0.8rem; */
  @media (max-width: ${BREAKPOINTS.alpha}) {
    padding-right: ${SPACING.xss};
    font-size: 0.7rem;
    display: none;
  }
  @media (max-width: ${BREAKPOINTS.bravo}) {
    padding-right: ${SPACING.xxs};
    font-size: 0.8rem;
  }
`

const TimeBox = styled.div`
  padding-right: ${SPACING.m};
  @media (max-width: ${BREAKPOINTS.alpha}) {
    font-size: 0.7rem;
    /* display: none; */
  }
  @media (max-width: ${BREAKPOINTS.bravo}) {
    font-size: 0.8rem;
  }
`

const PostDate = ({ date, author, readTime }) => (
  <div>
    <MetaBox>
      <DateBox>
        <FaCalendar style={{ color: COLORS.primaryBase }} /> {date}
      </DateBox>
      <AuthorBox>
        <FaUser style={{ color: COLORS.primaryBase }} /> {author}
      </AuthorBox>
      <TimeBox>
        <FaClock style={{ color: COLORS.primaryBase }} /> {""}
        {readTime} min to read
      </TimeBox>
    </MetaBox>
  </div>
)

export default PostDate
