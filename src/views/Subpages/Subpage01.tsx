import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Label from '../../components/Label'
import Spacer from '../../components/Spacer'
import ChangedBrrrIcon from '../../components/ChangedBrrrIcon'
import useAllEarnings from '../../hooks/useAllEarnings'
import useAllStakedValue from '../../hooks/useAllStakedValue'
import useFarms from '../../hooks/useFarms'
import useTokenBalance from '../../hooks/useTokenBalance'
import useBrrr from '../../hooks/useBrrr'
import { getBrrrAddress, getBrrrSupply } from '../../brrr/utils'
import { getBalanceNumber } from '../../utils/formatBalance'


const Subpage01: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const brrr = useBrrr()
  const brrrBalance = useTokenBalance(getBrrrAddress(brrr))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getBrrrSupply(brrr)
      setTotalSupply(supply)
    }
    if (brrr) {
      fetchTotalSupply()
    }
  }, [brrr, setTotalSupply])

  return (
    <StyledWrapper>
      <StyledbrWrapper>
      </StyledbrWrapper>

      <StyledBalance>
        <ChangedBrrrIcon />
        <Spacer />
        <div style={{ flex: 1 }}>
          <StyledValueBelow>
            My BRRR
          </StyledValueBelow>
          <StyledValue>
            {!!account ? getBalanceNumber(brrrBalance) : 'Locked'}
          </StyledValue>          
        </div>
      </StyledBalance>

    </StyledWrapper>
    
  )
}


const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledbrWrapper = styled.div`
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: stretch;
  }
  padding-bottom: 10px;
`

const StyledBalance = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  align-items: center;
  justify-content: center;
  text-align:center;
  padding-top:15px;
  padding-bottom:15px;
  color: ${(props) => props.theme.color.grey[900]};
  @media (max-width: 768px) {
    width: 60%;
    align-items: stretch;
  }
`

const StyledValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 20px;
  font-weight: 800;
  padding-top: 1px;
  color: #ffffff;
`
const StyledValueBelow = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 20px;
  font-weight: 800;
  padding-bottom: 1px;
  color: #e2ee2a;
  @media (max-width: 768px) {
    width:100%;
    margin-top:5px;
  }
`

export default Subpage01
