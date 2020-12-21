import React from 'react'
import wbtcbrrr from '../../assets/img/4.png'

interface WbtcBrrrProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const WbtcBrrr: React.FC<WbtcBrrrProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={wbtcbrrr} height="100" style={{ marginTop: 0 }} />  
  
)

export default WbtcBrrr
