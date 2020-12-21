import React from 'react'
import unibrrr from '../../assets/img/2.png'

interface UniBrrrProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const UniBrrr: React.FC<UniBrrrProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={unibrrr} height="100" style={{ marginTop: 0 }} />  
  
)

export default UniBrrr
