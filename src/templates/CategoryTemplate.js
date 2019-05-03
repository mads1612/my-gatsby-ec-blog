import React, { Component } from "react"
import styled from "styled-components"
import { PurchaseTag } from "styled-icons/boxicons-solid/PurchaseTag"

import Layout from "../components/Layouts/Layout"
import { setRem, setColor } from "../utils/styles"

const ContentWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  h2 {
    margin-bottom: ${setRem(20)};
  }
  h3 {
    margin-bottom: ${setRem(10)};
  }
  ul {
    list-style-position: outside;
    list-style-image: none;
    list-style-type: circle;
    padding: 0 0 0 ${setRem(30)};
    margin: 0 0 1rem 0;
  }
`

const StyledTag = styled(PurchaseTag)`
  color: ${setColor.primaryBase};
  padding-right: ${setRem(10)};
`

export default class CategoryTemplate extends Component {
  render() {
    return (
      <>
        <Layout>
          <ContentWrapper>
            <h2>Posts by Category</h2>
            <h3>
              <StyledTag size="30" />
              Category name
            </h3>
            <ul>
              <li>List of articles</li>
              <li>List of articles</li>
              <li>List of articles</li>
            </ul>
          </ContentWrapper>
        </Layout>
      </>
    )
  }
}
