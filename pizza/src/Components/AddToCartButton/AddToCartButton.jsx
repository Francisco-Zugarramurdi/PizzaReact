import React from 'react'
import { AddToCartButtonStyled } from './AddtoCartButtonStyled'
const AddToCartButton = ({onClick}) => {
  
  return (
    <AddToCartButtonStyled onClick={onClick} whileHover={{scale:1.05, transition: { duration: 0.2}}} whileTap={{scale: 0.8}}>Add to cart</AddToCartButtonStyled>
  )
}

export default AddToCartButton
// 