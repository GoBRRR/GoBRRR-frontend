import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useBrrr from '../../hooks/useBrrr'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../brrr/utils'
import { getFarms } from '../../brrr/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const brrr = useBrrr()
  const { account } = useWallet()

  const farms = getFarms(brrr)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
