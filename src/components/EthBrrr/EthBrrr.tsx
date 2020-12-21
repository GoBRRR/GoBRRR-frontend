import React from 'react'
import ethbrrr from '../../assets/img/1.png'

interface EthBrrrProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthBrrr: React.FC<EthBrrrProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethbrrr} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthBrrr
