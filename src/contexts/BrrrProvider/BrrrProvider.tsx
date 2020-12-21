import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Brrr } from '../../brrr'

export interface BrrrContext {
  brrr?: typeof Brrr
}

export const Context = createContext<BrrrContext>({
  brrr: undefined,
})

declare global {
  interface Window {
    brrrsauce: any
  }
}

const BrrrProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [brrr, setBrrr] = useState<any>()

  // @ts-ignore
  window.brrr = brrr
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const brrrLib = new Brrr(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setBrrr(brrrLib)
      window.brrrsauce = brrrLib
    }
  }, [ethereum])

  return <Context.Provider value={{ brrr }}>{children}</Context.Provider>
}

export default BrrrProvider
