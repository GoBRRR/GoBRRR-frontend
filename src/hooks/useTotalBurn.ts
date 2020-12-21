import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import useBrrr from './useBrrr'

import { totalBurn, getMasterChefContract } from '../brrr/utils'

const useTotalBurn = () => {

const { account } = useWallet()

  const brrr = useBrrr()
  const masterChefContract = getMasterChefContract(brrr)

  const state = useCallback(async () => {
    const success = await totalBurn(masterChefContract, account)    
  }, [brrr])

  return { onSuccess: state }
}

export default useTotalBurn

