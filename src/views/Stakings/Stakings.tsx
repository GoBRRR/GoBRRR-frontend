import React from 'react'
import styled from 'styled-components'
import Layouttop from './topcomponents/Layout';
import GlobalStyles from '../../styles/global';
import { Switch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import Page from '../../components/Page'
import Button from '../../components/Button'
import useModal from '../../hooks/useModal'
import WalletProviderModal from '../../components/WalletProviderModal'

const Balances: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  return (
    <Switch>
      <Page>
        {!!account ? (
          <>            
            <StyledbrWrapper>
              <Layouttop/>
              <GlobalStyles/>
            </StyledbrWrapper>                                   
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>   
    
  )
}

const StyledbrWrapper = styled.div`
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  padding-bottom: 10px;
`

export default Balances
