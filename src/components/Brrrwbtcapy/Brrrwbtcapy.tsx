import React from 'react'
import brrrwbtcapy from '../../assets/img/pool2.png'

interface BrrrwbtcapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Brrrwbtcapy: React.FC<BrrrwbtcapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={brrrwbtcapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Brrrwbtcapy
