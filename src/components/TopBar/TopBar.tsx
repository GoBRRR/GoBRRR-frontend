import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <Container size="lg">
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <StyledLogoWrapperNav>
            <Nav />
          </StyledLogoWrapperNav>          
          <StyledLogoWrapperButton>
            <AccountButton />
          </StyledLogoWrapperButton>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  width: 260px;
  @media (max-width: 860px) {
    width: auto;
  }
  display: flex;
  flex:25%;
  @media(max-width:860px){
    flex:100%;
    margin-top:20px;
  }
`

const StyledTopBar = styled.div`  
background-color: #153e90;  
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  @media(max-width:860px){
    flex-direction: column;
  }
`
const StyledLogoWrapperNav = styled.div`
  display:flex;
  flex:60%;
  @media(max-width:860px){
    flex:100%;
  }
`
const StyledLogoWrapperButton = styled.div`
  display:flex;
  flex:15%;
  @media(max-width:860px){
    flex:100%;
    margin-top:10px;
    margin-bottom:10px;
  }
`
export default TopBar
