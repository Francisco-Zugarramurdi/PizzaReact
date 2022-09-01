import React from 'react'
import { CarrouselStyled } from './CarrouselStyled'

const Carrousel = ({secondary, children}) => {
  return (
   <CarrouselStyled secondary={secondary}>{children}</CarrouselStyled>
  )
}

export default Carrousel