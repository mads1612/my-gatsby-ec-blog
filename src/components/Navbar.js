import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import ButtonLink from "./ButtonLink"

import Name from "./Name"

import { BREAKPOINTS } from "../constants/index"

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  z-index: 10000;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
`

const MenuBox = styled(Box)`
  @media (max-width: ${BREAKPOINTS.alpha}) {
    display: none;
  }
`

const NameBox = styled(Box)`
  @media (max-width: ${BREAKPOINTS.alpha}) {
    text-align: center;
  }
`

const MenuItem = styled(ButtonLink)`
  font-family: "Raleway";
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-right: 32px;
  height: 62px;
  font-size: 11px;
  float: right;
  position: relative;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  @media (max-width: ${BREAKPOINTS.alpha}) {
    margin-right: 15px;
  }
`

const NavBar = props => (
  <Base>
    <Flex>
      <NameBox px={4} width={[1, 1 / 3, 2 / 6]}>
        <Name />
      </NameBox>
      {!props.noMenu ? (
        <MenuBox px={2} width={[0, 2 / 3, 4 / 6]}>
          <ul>
            {props.menu.map(({ node: item }) => (
              <li key={item.id}>
                <MenuItem aria-label={item.title}>{item.title}</MenuItem>
              </li>
            ))}
          </ul>
        </MenuBox>
      ) : (
        <></>
      )}
    </Flex>
  </Base>
)

export default NavBar
