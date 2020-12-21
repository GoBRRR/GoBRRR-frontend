import { useCallback } from 'react'

import useBrrr from './useBrrr'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../brrr/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const brrr = useBrrr()

  const handleStake = useCallback(
    async (amount: string) => {          

      const txHash = await stake(
        getMasterChefContract(brrr),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, brrr],
  )

  return { onStake: handleStake }
}

export default useStake
