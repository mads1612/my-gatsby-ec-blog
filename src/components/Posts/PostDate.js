import React from "react"
import { styles } from "../../utils"
// import { rhythm } from "../styles/typography"
import styled from "styled-components"
import { FaCalendar } from "react-icons/fa/"
import { FaUser } from "react-icons/fa/"
import { FaClock } from "react-icons/fa/"

const MetaBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 0;
  @media (max-width: ${styles.breakpoints.alpha}) {
    margin-left: ${styles.spacing.xxs};
    font-size: 0.7rem;
    padding-right: ${styles.spacing.xxs};
  }
  @media (max-width: ${styles.breakpoints.bravo}) {
    font-size: 0.8rem;
    padding-right: ${styles.spacing.s};
  }
`

const DateBox = styled.div`
  font-size: 0.8rem !important;
  padding-right: ${styles.spacing.m};
  margin-bottom: 0;
  @media (max-width: ${styles.breakpoints.alpha}) {
    padding-right: ${styles.spacing.xxs};
    font-size: 0.7rem;
  }
  @media (max-width: ${styles.breakpoints.bravo}) {
    padding-right: ${styles.spacing.s};
    font-size: 0.8rem;
  }
`

const AuthorBox = styled.div`
  padding: 0 ${styles.spacing.m};
  font-size: 0.8rem;
  margin-bottom: 0;
  @media (max-width: ${styles.breakpoints.alpha}) {
    padding-right: ${styles.spacing.xss};
    font-size: 0.7rem;
    display: none;
  }
  @media (max-width: ${styles.breakpoints.bravo}) {
    padding-right: ${styles.spacing.xxs};
    font-size: 0.8rem;
  }
`

const TimeBox = styled.div`
  padding-right: ${styles.spacing.m};
  font-size: 0.8rem !important;
  margin-bottom: 0;
  @media (max-width: ${styles.breakpoints.alpha}) {
    font-size: 0.7rem;
  }
  @media (max-width: ${styles.breakpoints.bravo}) {
    font-size: 0.8rem;
  }
`

const PostDate = ({ date, author, readTime }) => (
  <div>
    <MetaBox>
      <DateBox>
        <FaCalendar style={{ color: `${styles.colors.primaryBase}` }} /> {date}
      </DateBox>
      <AuthorBox>
        <FaUser style={{ color: `${styles.colors.primaryBase}` }} /> {author}
      </AuthorBox>
      <TimeBox>
        <FaClock style={{ color: `${styles.colors.primaryBase}` }} /> {""}
        {readTime} min to read
      </TimeBox>
    </MetaBox>
  </div>
)

export default PostDate
