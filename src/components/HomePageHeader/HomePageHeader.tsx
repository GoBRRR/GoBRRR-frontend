import React from 'react'
import styled from 'styled-components'
import Container from '../Container'

interface HomePageHeaderProps {
  subtitle?: string
  title?: string
}

const HomePageHeader: React.FC<HomePageHeaderProps> = ({ subtitle, title }) => {
    return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledTitle>{title}</StyledTitle>        
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  ) 
}


const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledTitle = styled.h1`
  font-family: 'Arial-Rounded', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: #2ac158;
`

const StyledSubtitle = styled.h3`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin-top:25px;
  text-align: center;
`

export default HomePageHeader
