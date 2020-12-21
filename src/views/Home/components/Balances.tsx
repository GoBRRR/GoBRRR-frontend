import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import FirstCard from '../../../components/FirstCard'
import CardContent from '../../../components/CardContent'
import FirstLabel from '../../../components/FirstLabel'
import Spacer from '../../../components/Spacer'
import FirstValue from '../../../components/FirstValue'
import ChangedBrrrIcon from '../../../components/ChangedBrrrIcon'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useBrrr from '../../../hooks/useBrrr'
import { getBrrrAddress, getBrrrSupply } from '../../../brrr/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'

const PendingRewards: React.FC = () => {
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

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()
  

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
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
      <FirstCard>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <ChangedBrrrIcon />
              <Spacer />
              <div style={{ flex: 1 }}>
                <FirstLabel text="YOUR BALANCE" />
                <FirstValue
                  value={!!account ? getBalanceNumber(brrrBalance) : 'Locked'}
                />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          Pending harvest
          <FootnoteValue>
            <PendingRewards /> BRRR
          </FootnoteValue>
        </Footnote>
      </FirstCard>
      <Spacer />

      <FirstCard>
        <CardContent>
          <FirstLabel text="TOTAL SUPPLY" />
          <FirstValue
            value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
          />
        </CardContent>
        <Footnote>
          New rewards per block
          <FootnoteValue>1 BRRR</FootnoteValue>
        </Footnote>
      </FirstCard>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: #ffffff;
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  float: right;
`
const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`
const StyledBalances = styled.div`
  display: flex;
`
const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
