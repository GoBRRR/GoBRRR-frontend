import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../brrr/utils'
import useBrrr from './useBrrr'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  tokenAmountWholeLP: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const brrr = useBrrr()
  const farms = getFarms(brrr)
  const masterChefContract = getMasterChefContract(brrr)
  const wethContact = getWethContract(brrr)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )
    //console.log("balances",balances)
    //console.log("xxxmasterChefContract:",masterChefContract)
    //console.log("xxxwethContact:",wethContact)

    setBalance(balances)
  }, [account, masterChefContract, brrr])

  useEffect(() => {
    if (account && masterChefContract && brrr) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, brrr])

  return balances
}

export default useAllStakedValue
