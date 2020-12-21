import React from 'react'
import brrruniapy from '../../assets/img/pool4.png'

interface BrrruniapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Brrruniapy: React.FC<BrrruniapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={brrruniapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Brrruniapy
