import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>      
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/TOKENOMICS">
        TOKENOMICS
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/Infos">
        Info
      </StyledLink> 
      <StyledLink exact activeClassName="active" to="/Stakings">
        Farm
      </StyledLink>      
      <StyledAbsoluteLink
        href="https://app.uniswap.org/#/swap"
        target="_blank"
      >
        Buy BRRR
      </StyledAbsoluteLink> 
      <StyledAbsoluteLink
        href="https://gobrrr.medium.com"
        target="_blank"
      >
        About
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: #e2ee2a;
  font-weight: 800;
  font-size: 20px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
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
  color: #e2ee2a;
  font-weight: 800;
  font-size: 20px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
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
