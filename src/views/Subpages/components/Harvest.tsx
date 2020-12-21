import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import FirstCard from '../../../components/FirstCard'
import CardContent from '../../../components/CardContent'
import SmallCardIcon from '../../../components/SmallCardIcon'
import FirstLabel from '../../../components/FirstLabel'
import FirstValue from '../../../components/FirstValue'
import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'
import chef from '../../../assets/img/icon_image.png'
import { getBalanceNumber } from '../../../utils/formatBalance'

interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)
  

  return (
    <FirstCard>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
          <SmallCardIcon><img src={chef} height="32" style={{ marginTop: 0 }} /> </SmallCardIcon>
            <FirstValue value={getBalanceNumber(earnings)} />
            <FirstLabel text="BRRR Earned" />
            <Label1></Label1>
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              //disabled={pendingTx}
              text={pendingTx ? 'Collecting BRRR' : 'Claim'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
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
  width: 100%;
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

export default Harvest
