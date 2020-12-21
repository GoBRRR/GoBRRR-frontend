import React from 'react'
import brrrusdcapy from '../../assets/img/pool5.png'

interface BrrrusdcapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Brrrusdcapy: React.FC<BrrrusdcapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={brrrusdcapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Brrrusdcapy
