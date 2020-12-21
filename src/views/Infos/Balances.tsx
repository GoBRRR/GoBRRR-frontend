import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import Page from '../../components/Page'
import ChangedCropsIcon from '../../components/ChangedCropsIcon'
import useAllEarnings from '../../hooks/useAllEarnings'
import useAllStakedValues from '../../hooks/useAllStakedValues'
import useTokenBalance from '../../hooks/useTokenBalance'
import useCrops from '../../hooks/useCrops'
import { getCropsAddress, getCropsSupply } from '../../crops/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import { Switch } from 'react-router-dom'
import Button from '../../components/Button'
import useModal from '../../hooks/useModal'
import WalletProviderModal from '../../components/WalletProviderModal'
import { useWallet } from 'use-wallet'



const Balances: React.FC = () => {
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  const [totalSupply, setTotalSupply] = useState<BigNumber>() 
  const crops = useCrops()
  const cropsBalance = useTokenBalance(getCropsAddress(crops))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const allStakedValues = useAllStakedValues()
  let sumStakedValue = 0
  for (let stakedvalue of allStakedValues) {
    sumStakedValue += new BigNumber(stakedvalue)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }
 

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  useEffect(() => {
    setStart(end)
    setEnd(sumStakedValue)
  }, [sumStakedValue])
  

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getCropsSupply(crops)
      setTotalSupply(supply)
    }
    if (crops) {
      fetchTotalSupply()
    }
  }, [crops, setTotalSupply])

  return (
    <Switch>
    <Page>
    {!!account ? (
          <>          
          <Container>

            <StyledTitle>
              {"My Account Summary"}
            </StyledTitle>

            <StyledFlexLayout>
              <StyledItemblankLayout>          
              </StyledItemblankLayout>

              <StyledItemLayout>
                <StyledBalances>
                  <ChangedCropsIcon />
                  <Spacer />          
                  <StyledValue>
                    {!!account ? getBalanceNumber(cropsBalance)+"  BRRR" : 'Locked'}
                  </StyledValue> 
                </StyledBalances>
                <StyledSubValue>
                  {"My Balance"}
                </StyledSubValue>
              </StyledItemLayout>
              <StyledItemLayout>
                <StyledBalances>
                  <ChangedCropsIcon />
                  <Spacer />          
                  <StyledValue>
                    {totalSupply ? getBalanceNumber(totalSupply)+"  BRRR" : 'Locked'}
                  </StyledValue> 
                </StyledBalances>
                <StyledSubValue>
                  {"Total BRRR Supply"}
                </StyledSubValue>
              </StyledItemLayout>

              <StyledItemblankLayout>          
              </StyledItemblankLayout>

            </StyledFlexLayout>
            <Spacer />
            <StyledFlexLayout>

              <StyledItemblankLayout>          
              </StyledItemblankLayout>

              <StyledItemLayout>
                <StyledBalances>
                  <ChangedCropsIcon />
                  <Spacer />          
                  <StyledValue>
                    {!!account ? sumStakedValue +"  LP Tokens" : 'Locked'}
                  </StyledValue> 
                </StyledBalances>
                <StyledSubValue>
                  {"My Staked Liquidity Value"}
                </StyledSubValue>
              </StyledItemLayout>

              <StyledItemLayout>
                <StyledBalances>
                  <ChangedCropsIcon />
                  <Spacer />          
                  <StyledValue>
                    {!!account ? sumEarning +"  BRRR" : 'Locked'}
                  </StyledValue> 
                </StyledBalances>
                <StyledSubValue>
                  {"My Total Claimable Rewards"}
                </StyledSubValue>
              </StyledItemLayout>

              <StyledItemblankLayout>          
              </StyledItemblankLayout>

            </StyledFlexLayout>

          </Container>
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


const StyledBalances = styled.div`
  display: flex;
  align-items: left;
  justify-content: left
`


const StyledValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding-top: 6px;
  color: #fff;
`


const StyledSubValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 25px;
  font-weight: 600;
  padding-top: 5px;
  text-align: center;
  color: #2ac158;
`

const StyledTitle = styled.h2`
  color: #06f74f;
  font-size: 40px;
  font-weight: 800;
  margin: 0;
  padding: 52px 0;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[900]};
  }
`

const StyledFlexLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-left:30px;
`
const StyledItemLayout = styled.div`
  display: block;
  width: 50%; 
`

const StyledItemblankLayout = styled.div`
  display: block;
  width: 10%; 
`


export default Balances
