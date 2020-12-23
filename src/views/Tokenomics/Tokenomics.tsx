import React from 'react'
import Page from '../../components/Page'
import tokenomics from '../../assets/img/tokenomics.png'
import styled from 'styled-components'
import {Image} from 'react-bootstrap'


const Tokenomics: React.FC = () => {    

  return (
    <Page>
      <PageStyle>
        {<Image src={tokenomics} rounded style={crazy}/>}
      </PageStyle>    
    </Page>
  )
}

const PageStyle = styled.div`
  @media(max-width:860px){
    padding-top:25px;
  } 
`
const crazy= {
  display: 'flex',
  marginBottom:30,
  width:'100%',
  height:'900px',
}

export default Tokenomics
