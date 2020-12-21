import BigNumber from 'bignumber.js'
import useFarms from '../../hooks/useFarms'
import { Farm } from '../../contexts/Farms'
import useAllStakedValue, {
  StakedValue,
} from '../../hooks/useAllStakedValue'
import Loader from '../../components/Loader'
import useBrrr from '../../hooks/useBrrr'
import { getEarned, getMasterChefContract } from '../../brrr/utils'
import { bnToDec } from '../../utils'
import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Spacer from '../../components/Spacer'
import Brrruniapy from '../../components/Brrruniapy'
import Button from '../../components/Button'
import useFarm from '../../hooks/useFarm'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { getContract } from '../../utils/erc20'
import { provider } from 'web3-core'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const brrr = useBrrr()  

  useEffect(() => {
    async function fetchEarned() {
      if (brrr) return
      const earned = await getEarned(
        getMasterChefContract(brrr),
        lpTokenAddress,
        account,
      )
      setHarvestable(bnToDec(earned))
    }
    if (brrr && account) {
      fetchEarned()
    }
  }, [brrr, lpTokenAddress, account, setHarvestable])
  
  return (
    <StyledCardWrapper> 
        APY 24%
        <Spacer /> 
    </StyledCardWrapper>
  )
 
}

const Subpage12: React.FC = () => {
  const farmId = "BRRR-UNI UNI-V2 LP"

  const {
    pid,
    lpToken,
    lpTokenAddress,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
  }
  
  const { ethereum } = useWallet()
  //
  const [farms] = useFarms()
  const stakedValue = useAllStakedValue()
  //const BLOCKS_PER_YEAR = new BigNumber(2336000)
  const BLOCKS_PER_YEAR = new BigNumber(365)
  const BRRR_PER_BLOCK = new BigNumber(1)
  const brrrIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'UNI',
  )
  //console.log("stakedValue",stakedValue)  
  //console.log("brrrIndex",brrrIndex)
  const brrrPrice =
    brrrIndex >= 0 && stakedValue[brrrIndex]
      ? stakedValue[brrrIndex].tokenPriceInWeth
      : new BigNumber(0)

  //
  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress]) 


  const rows = farms.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {

      const farmWithStakedValue = {
        ...farm,
        ...stakedValue[i],
        apy: stakedValue[i]
          ? brrrPrice
              .times(BRRR_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .div(stakedValue[i].totalWethValue)
          : null,
      }    

      //console.log("12-1",farmWithStakedValue)
      const newFarmRows = [...farmRows]
      if (newFarmRows[newFarmRows.length - 1].length === 5) {
        newFarmRows.push([farmWithStakedValue])
      } else {
        newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      }
      return newFarmRows
    },
    [[]],
  )


    
  return (
    <StyledFarm>
    <StyledWrapper>           
      <StyledBalance>
      <Spacer />
        <div style={{ flex: 1 }}>
          <StyledWrapper>
            <Stake
              lpContract={lpContract}
              pid={pid}
              tokenName={lpToken.toUpperCase()}
            />
          </StyledWrapper>

        </div>
      </StyledBalance>

      <Styledimg>
        <StyledBalance>
          <div style={{ flex: 1 }}>          
              <Brrruniapy/>          
              <span style={{ position: "absolute", bottom: -10, left: 150}}>
                {!!rows[0].length ? (                                                      
                  <FarmCard farm={rows[0][1]} />
                ) : (
                  <StyledLoadingWrapper>
                    <Loader text="Farming ..." />
                  </StyledLoadingWrapper>
                )}
              </span>              
          </div>
        </StyledBalance>
      </Styledimg>

      <StyledBalance>
        <Spacer />
        <Harvest pid={pid} />
      </StyledBalance>
      
      <Spacer size="lg" />

    </StyledWrapper>    
    
    </StyledFarm>
  )
}


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`

const Styledimg = styled.div`
  padding-left:20px;
  position: relative;  
  margin-right: 35px;
`

const StyledBalance = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${(props) => props.theme.color.grey[900]};
`

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;  
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
  color: #06f74f;
  font-size:20px;
  font-weight:700;
`



export default Subpage12

