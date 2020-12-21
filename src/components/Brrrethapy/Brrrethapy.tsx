import React from 'react'
import brrrethapy from '../../assets/img/pool3.png'

interface BrrrethapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Brrrethapy: React.FC<BrrrethapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={brrrethapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Brrrethapy
