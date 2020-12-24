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
    1: '0xb53189EB5ab4A0C866736b3A17ac5A847CdB5b55',
    //3: '0xFf262706Fc6ab36577441366f69B099fEE416A16',
    //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
  },
  masterChef: {
    1: '0x8B225B3CadB799FB5fd6E5902C1C4F609D3E17e5',
    //3: '0x068f8fc7f501523c59B28DDF719e8E4F70d9531f',
    //42: '0xEFa7b6952535b70807ce012D19D13d18970Bb58d',
  },  
  weth: {
    1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    //3: '0xc778417e063141139fce010982780140aa0cd5ab', 
    //42: '0x2bfCCE707529264856d87DEeeeB64cdcFf755a84', 
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {      
      1:'0x6283f40cd15b488f1b22ac72cdd96fe7ef6d9439',
      //3:'0xbf480053f2a3cd252ed1646ca468c477896126ae',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      1:'0xb53189EB5ab4A0C866736b3A17ac5A847CdB5b55',
      //3:'0xFf262706Fc6ab36577441366f69B099fEE416A16',
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
      1:'0xe56b646449f3a900a610f442f35939b3b0f71fb1',
      //3:'0xd693a3243553474a8a394829e4f12c8c55bab10b',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      1:'0xb53189EB5ab4A0C866736b3A17ac5A847CdB5b55',
      //3:'0xFf262706Fc6ab36577441366f69B099fEE416A16',
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
      1:'0x1f3619df8c6d536bb7ec10e1035654778f53bed9',
      //3:'0x8d184d2de467be71544fc104738e56de55f53c42',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      1:'0xb53189EB5ab4A0C866736b3A17ac5A847CdB5b55',
      //3:'0xFf262706Fc6ab36577441366f69B099fEE416A16',
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
      1:'0x2ba496780e10b96ddce33a4a0f90e4eb807c116c',
      //3:'0x0797076aa815dd70444dfe09cbbbe76a88d47d3d',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      1:'0xb53189EB5ab4A0C866736b3A17ac5A847CdB5b55',
      //3:'0xFf262706Fc6ab36577441366f69B099fEE416A16',
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
      1:'0xac092c212bb472a7992e8e9071f636d3cda916ad',
      //3:'0x9e269742b87cabd2abd9c9a4bf19f87221bffbd0',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
    },
    tokenAddresses: {
      1:'0xb53189EB5ab4A0C866736b3A17ac5A847CdB5b55',
      //3:'0xFf262706Fc6ab36577441366f69B099fEE416A16',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'BRRR-USDC',
    symbol: 'BRRR-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  }
]
