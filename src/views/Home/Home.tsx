import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/ani.gif'
import Container from '../../components/Container'
import Page from '../../components/Page'
import HomePageHeader from '../../components/HomePageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import {Image} from 'react-bootstrap'

const Home: React.FC = () => {
  return (
    <Page>
      <PageStyle>
        <HomePageHeader        
          title="Welcome to GoBRRR"
          subtitle="Stake Uniswap LP Tokens to Claim BRRR"
        />
      </PageStyle>
      <Container>
        <Image src={chef} rounded style={crazy}/>
      </Container>
      <Container>
        <Balances />
      </Container>     
      <Spacer size="lg" />      
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        
      </div>
      
    </Page>
  )
}

const PageStyle = styled.div`
  @media(max-width:860px){
    margin-top:25px;
  } 
`
const crazy= {
  display: 'flex',
  marginBottom:30,
  width:'100%',
  height:'600px',
}


export default Home
