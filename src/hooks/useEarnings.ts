import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../brrr/utils'
import useBrrr from './useBrrr'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const brrr = useBrrr()
  const masterChefContract = getMasterChefContract(brrr)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, brrr])
  

  useEffect(() => {
    if (account && masterChefContract && brrr) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, brrr])

  return balance
}

export default useEarnings
