import React from 'react'
import usdcbrrr from '../../assets/img/5.png'

interface UsdcBrrrProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const UsdcBrrr: React.FC<UsdcBrrrProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={usdcbrrr} height="100" style={{ marginTop: 0 }} />  
  
)

export default UsdcBrrr
