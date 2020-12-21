import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  brrr: { 
    3: '0xd941e8fCe216Dc476Bd7235B4d9b777C1d440c50',
    //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
  },
  masterChef: {
    3: '0x0Cbbe6EA2039f06B846F4b4d0D058efB7864071f',
    //42: '0xEFa7b6952535b70807ce012D19D13d18970Bb58d',
  },  
  weth: {     
    //42: '0x2bfCCE707529264856d87DEeeeB64cdcFf755a84',    
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      3:'0x7431c46193947afb23b5c195bb4700ca6d45727a',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0xd941e8fCe216Dc476Bd7235B4d9b777C1d440c50',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'BRRR-ETH',
    symbol: 'BRRR-ETH UNI-V2 LP',
    tokenSymbol: 'BRRR',
    icon: '🥕',
  },

  {
    pid: 1,
    lpAddresses: {
      3:'0x59ce25532f7a2b6f97f26536a3ef651912b35067',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0xd941e8fCe216Dc476Bd7235B4d9b777C1d440c50',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'BRRR-UNI',
    symbol: 'BRRR-UNI UNI-V2 LP',
    tokenSymbol: 'UNI',
    icon: '🐊',
  },
  {
    pid: 2,
    lpAddresses: {
      3:'0x8dd2fc86f9389086cd03aacaed6a7dabb379c954',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0xd941e8fCe216Dc476Bd7235B4d9b777C1d440c50',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'BRRR-DAI',
    symbol: 'BRRR-DAI UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 3,
    lpAddresses: {
      3:'0x7346d8b825cc2bc4fe62d7d554fa67c44bd4441f',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0xd941e8fCe216Dc476Bd7235B4d9b777C1d440c50',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'BRRR-WBTC',
    symbol: 'BRRR-WBTC UNI-V2 LP',
    tokenSymbol: 'WBTC',
    icon: '🥦',
  },
  {
    pid: 4,
    lpAddresses: {
      3:'0x34fa051689deca4e6c62b5d9c01108443a35c637',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
    },
    tokenAddresses: {
      3:'0xd941e8fCe216Dc476Bd7235B4d9b777C1d440c50',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'BRRR-USDC',
    symbol: 'BRRR-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  }
]
