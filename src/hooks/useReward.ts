import { useCallback } from 'react'

import useBrrr from './useBrrr'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../brrr/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const brrr = useBrrr()
  const masterChefContract = getMasterChefContract(brrr)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, brrr])

  return { onReward: handleReward }
}

export default useReward
