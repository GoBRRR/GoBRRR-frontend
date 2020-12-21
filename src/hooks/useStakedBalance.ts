import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../brrr/utils'
import useBrrr from './useBrrr'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const brrr = useBrrr()
  const masterChefContract = getMasterChefContract(brrr)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, brrr])

  useEffect(() => {
    if (account && brrr) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, brrr])

  return balance
}

export default useStakedBalance
