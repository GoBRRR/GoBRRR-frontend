import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
       <FirstLink>
      <StyledLink exact activeClassName="active" to="/">
        HOME
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/Farm">
        FARM
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/Info">
        INFO
      </StyledLink>
      </FirstLink>
      <SecondLink>
      <StyledLink exact activeClassName="active" to="/TOKENOMICS">
        TOKENOMICS
      </StyledLink>                  
      <StyledAbsoluteLink
        href="https://info.uniswap.org/token/0xb53189eb5ab4a0c866736b3a17ac5a847cdb5b55"
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
      </SecondLink>
    </StyledNav>
  )
}

const FirstLink = styled.div`
  display:flex;
  flex:40%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:60%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media(max-width:860px){
    flex-direction: column;
  }
`

const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: #e2ee2a;
  }
  &.active {
    color: #06f74f;
  }
  @media (max-width: 860px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`


const StyledAbsoluteLink = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  padding-left: ${(props) => props.theme.spacing[2]}px;
  padding-right: ${(props) => props.theme.spacing[2]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: #e2ee2a;
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 860px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
