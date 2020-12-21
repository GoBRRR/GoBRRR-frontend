import React from 'react'
import Page from '../../components/Page'
import tokenomics from '../../assets/img/tokenomics.png'


const Tokenomics: React.FC = () => {    

  return (
    <Page>        
      {<img height={900} src={tokenomics} />}        
    </Page>
  )
}

export default Tokenomics
