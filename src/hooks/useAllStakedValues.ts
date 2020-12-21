import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract, getFarms } from '../brrr/utils'
import useBrrr from './useBrrr'
import useBlock from './useBlock'

const useAllStakedValues = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const brrr = useBrrr()
  const farms = getFarms(brrr)
  const masterChefContract = getMasterChefContract(brrr)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
      getStaked(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, brrr])

  useEffect(() => {
    if (account && masterChefContract && brrr) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, brrr])

  return balances
}

export default useAllStakedValues
