import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>      
      <StyledLink exact activeClassName="active" to="/">
        HOME
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/TOKENOMICS">
        TOKENOMICS
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/Infos">
        INFO
      </StyledLink> 
      <StyledLink exact activeClassName="active" to="/Stakings">
        FARM
      </StyledLink>      
      <StyledAbsoluteLink
        href="https://app.uniswap.org/#/swap"
        target="_blank"
      >
        BUY BRRR
      </StyledAbsoluteLink> 
      <StyledAbsoluteLink
        href="https://gobrrr.medium.com"
        target="_blank"
      >
        ABOUT
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: #f0e64d;
  }
  &.active {
    color: #1cba2f;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`


const StyledAbsoluteLink = styled.a`
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: #f0e64d;
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
