import { useCallback } from 'react'

import useBrrr from './useBrrr'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../brrr/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const brrr = useBrrr()
  const masterChefContract = getMasterChefContract(brrr)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, brrr],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
