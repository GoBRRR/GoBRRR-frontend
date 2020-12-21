import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/ani.gif'
import Container from '../../components/Container'
import Page from '../../components/Page'
import HomePageHeader from '../../components/HomePageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <HomePageHeader        
        title="Welcome to GoBRRR"
        subtitle="Stake Uniswap LP Tokens to Claim BRRR"
      />
      <Container>
      <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              marginBottom: 30,
              justifyContent: 'center',
            }}
          >
        <img src={chef} height={500} width={600} />
        </div>
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


export default Home
