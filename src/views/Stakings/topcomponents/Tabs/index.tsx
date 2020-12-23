import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section, Footnote, Footnotetitle } from './styles';

import EthBrrr from '../../../../components/EthBrrr'
import UniBrrr from '../../../../components/UniBrrr'
import DaiBrrr from '../../../../components/DaiBrrr'
import WbtcBrrr from '../../../../components/WbtcBrrr'
import UsdcBrrr from '../../../../components/UsdcBrrr'

import Subpage01 from '../../../Subpages/Subpage01';

import Layout1 from '../../../Subpages/Subpage11';
import Layout2 from '../../../Subpages/Subpage12';
import Layout3 from '../../../Subpages/Subpage13';
import Layout4 from '../../../Subpages/Subpage14';
import Layout5 from '../../../Subpages/Subpage15';

import GlobalStyles from '../../../../styles/global';
import Spacer from '../../../../components/Spacer';

import styled from 'styled-components'

const Tabs: React.FC = () => {
  const [ethbrrr, setEthBrrr] = useState('active');
  const [unibrrr, setUniBrrr] = useState('hidden');
  const [daibrrr, setDaiBrrr] = useState('hidden');
  const [wbtcbrrr, setWbtcBrrr] = useState('hidden');
  const [usdcbrrr, setUsdcBrrr] = useState('hidden');
  

  function handleTabLink(id: string): void {
    switch (id) {
      case 'ethbrrr':
        setEthBrrr('active');
        setUniBrrr('hidden');
        setDaiBrrr('hidden');
        setWbtcBrrr('hidden');
        setUsdcBrrr('hidden');       
        break;
      case 'unibrrr':
        setEthBrrr('hidden');
        setUniBrrr('active');
        setDaiBrrr('hidden');
        setWbtcBrrr('hidden');
        setUsdcBrrr('hidden');
        break; 
      case 'daibrrr':
        setEthBrrr('hidden');
        setUniBrrr('hidden');
        setDaiBrrr('active');
        setWbtcBrrr('hidden');
        setUsdcBrrr('hidden');
        break;
      case 'wbtcbrrr':
        setEthBrrr('hidden');
        setUniBrrr('hidden');
        setDaiBrrr('hidden');
        setWbtcBrrr('active');
        setUsdcBrrr('hidden');
        break;
      case 'usdcbrrr':
        setEthBrrr('hidden');
        setUniBrrr('hidden');
        setDaiBrrr('hidden');
        setWbtcBrrr('hidden');
        setUsdcBrrr('active');
        break;
      default:
        break;
    }
  }

  return (
    <Container>      
      <TabLinks>
      <StyledNav>
        <FirstLink>
        <Button
          type="button"
          className={ethbrrr}
          onClick={() => handleTabLink('ethbrrr')}
        >
          <EthBrrr/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={unibrrr}
          onClick={() => handleTabLink('unibrrr')}
        >
          <UniBrrr/> 
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={daibrrr}
          onClick={() => handleTabLink('daibrrr')}
        >
          <DaiBrrr/>
        </Button>
        </FirstLink>
        <Spacer/>
        <SecondLink>
        <Button
          type="button"
          className={wbtcbrrr}
          onClick={() => handleTabLink('wbtcbrrr')}
        >
          <WbtcBrrr/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={usdcbrrr}
          onClick={() => handleTabLink('usdcbrrr')}
        >
          <UsdcBrrr/>
        </Button>
        </SecondLink>
        </StyledNav>
      </TabLinks>

      <TabContent>
        <Section className={ethbrrr}>
          <Footnote>Farm your BRRR and grow more BRRR</Footnote>
          <Subpage01/>
          <Footnotetitle>BRRR/ETH Pool</Footnotetitle>
          <Layout1/>
          <GlobalStyles/>
        </Section>

        <Section className={unibrrr}>
          <Footnote>Farm your BRRR and grow more BRRR</Footnote>
          <Subpage01/>
          <Footnotetitle>BRRR/UNI Pool</Footnotetitle>
          <Layout2/>
          <GlobalStyles/>
        </Section>

        <Section className={daibrrr}>
          <Footnote>Farm your BRRR and grow more BRRR</Footnote>
          <Subpage01/>
          <Footnotetitle>BRRR/DAI Pool</Footnotetitle>
          <Layout3/>
          <GlobalStyles/>
        </Section>

        <Section className={wbtcbrrr}>
          <Footnote>Farm your BRRR and grow more BRRR</Footnote>
          <Subpage01/>
          <Footnotetitle>BRRR/WBTC Pool</Footnotetitle>
          <Layout4/>
          <GlobalStyles/>
        </Section>

        <Section className={usdcbrrr}>
          <Footnote>Farm your BRRR and grow more BRRR</Footnote>
          <Subpage01/>
          <Footnotetitle>BRRR/USDC Pool</Footnotetitle>
          <Layout5/>
          <GlobalStyles/>
        </Section>
      </TabContent>


      </Container>
  );
  
};

const FirstLink = styled.div`
  display:flex;
  flex:60%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:40%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`
const StyledNav = styled.div`
  align-items: center;
  display: flex;
  @media(max-width:860px){
    flex-direction: column;
  }
`


export default Tabs;

