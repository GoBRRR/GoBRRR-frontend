import React from 'react'
import brrrdaiapy from '../../assets/img/pool1.png'

interface BrrrdaiapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Brrrdaiapy: React.FC<BrrrdaiapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={brrrdaiapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Brrrdaiapy
