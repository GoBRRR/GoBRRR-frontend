import { useContext } from 'react'
import { Context } from '../contexts/BrrrProvider'

const useBrrr = () => {
  const { brrr } = useContext(Context)
  return brrr
}

export default useBrrr