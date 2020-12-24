import React from 'react'
import styled from 'styled-components'
import Spacer from '../../Spacer'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Styledlayout>
        Copyright 2020@ Go BRRR
      </Styledlayout>
      
      <Spacer/>

      <StyledLink
        href="https://twitter.com/GoBRRR_Farm"
        target="_blank"
      >
        TWITTER
      </StyledLink> 
      
      <StyledLink
        href="https://t.me/Go_BRRR"
        target="_blank"
      >
        TELEGRAM
      </StyledLink>
      
      <StyledLink
        href="https://github.com/GoBRRR"
        target="_blank"
      >
        GITHUB

      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  background-color: #153e90;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Styledlayout = styled.nav`
  display: flex;
  color: #06f74f;
  font-size: 18px;
  flex:60%;
  margin-right:40px;
  @media (max-width: 768px) {
    margin-right:0px;
  }
`
const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: #ffea00;
  }
  flex:15%;
  font-weight: 600;
`

export default Nav
