import React from 'react'
import daibrrr from '../../assets/img/3.png'

interface DaiBrrrProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const DaiBrrr: React.FC<DaiBrrrProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={daibrrr} height="100" style={{ marginTop: 0 }} />  
  
)

export default DaiBrrr
