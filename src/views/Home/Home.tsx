import React from 'react'
import styled from 'styled-components'
//import chef from '../../assets/img/MEM-FEDERAL-RESSEVA-1-1.gif'
import chef from '../../assets/img/head.png'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        //icon={<img width={600} height={500} src={chef} />}
        icon={<img height={120} src={chef} />}
        title="Welcome to GoBRRR"
        subtitle="Stake Uniswap LP Tokens to Claim BRRR"
      />
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
