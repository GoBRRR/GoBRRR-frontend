import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
}

const FirstLabel: React.FC<LabelProps> = ({ text }) => (
  <StyledLabel>{text}</StyledLabel>
)

const StyledLabel = styled.div`
  color: #FFFFFF;
`

export default FirstLabel
