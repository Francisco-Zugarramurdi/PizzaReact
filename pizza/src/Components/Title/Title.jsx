import React from 'react'
import { TitleStyled } from './TitleStyled'
const Title = ({secondary, children, size, color}) => {
  return (
    <TitleStyled secondary = {secondary} size={size} color={color}>{children}</TitleStyled>
  )
}

export default Title