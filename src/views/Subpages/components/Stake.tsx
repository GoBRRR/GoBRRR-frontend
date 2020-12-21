import BigNumber from 'bignumber.js'
import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Contract } from 'web3-eth-contract'
import Button from '../../../components/Button'
import FirstCard from '../../../components/FirstCard'
import CardContent from '../../../components/CardContent'
import SmallCardIcon from '../../../components/SmallCardIcon'
import FirstLabel from '../../../components/FirstLabel'
import Spacer from '../../../components/Spacer'
import FirstValue from '../../../components/FirstValue'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useStakedBalance from '../../../hooks/useStakedBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnstake from '../../../hooks/useUnstake'
import { getBalanceNumber } from '../../../utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import chef from '../../../assets/img/icon_image.png'

interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({ lpContract, pid, tokenName }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  
  const allowance = useAllowance(lpContract)
  const { onApprove } = useApprove(lpContract)
  const tokenBalance = useTokenBalance(lpContract.options.address)
  const stakedBalance = useStakedBalance(pid)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      pid={pid}
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />,
  )  

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
      pid = {pid}
    />,
  )

  const handleApprove = useCallback(async () => {

    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {        
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }

  }, [onApprove, setRequestedApproval])

   
  return (
    <FirstCard>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <SmallCardIcon><img src={chef} height="32" style={{ marginTop: 0 }} /> </SmallCardIcon>
            <FirstValue value={getBalanceNumber(stakedBalance)} />
            <FirstLabel text={`${tokenName} Staked`} />
            <Label1></Label1>          
          </StyledCardHeader>
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0))}
                  text="Unstake"
                  onClick={onPresentWithdraw}
                />
                <Spacer/>
                <Button                  
                  text="Stake"
                  onClick={onPresentDeposit}>
                </Button>
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </FirstCard>
  )
}  

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[8]}px;
  width: 110%;
`
const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
const Label1 = styled.div` 
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 15px;
  font-weight: 600;
  margin-top: ${(props) => props.theme.spacing[3]}px;
`
export default Stake
