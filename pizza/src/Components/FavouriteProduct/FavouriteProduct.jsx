import React from 'react'
import { CardStyled } from './FavouriteProuctStyled'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart-actions'
const FavouriteProduct = (product) => {
    const dispatch = useDispatch();
    return (
    <CardStyled>
         <AddToCartButton whileHover={{scale:1.05, transition: { duration: 0.2}}} whileTap={{scale: 0.8}} onClick={()=>dispatch(cartActions.addProductToCart({...product}))}>Add to cart</AddToCartButton>
            <span>{product.price}</span>
            <p>{product.desc}</p>
            <h3>{product.name}</h3>
            <motion.img src={product.img} alt="" whileFocus = { {opacity:0,scale: 1.1,zIndex: 0 }}whileHover={{opacity:0,scale: 1.1,zIndex: 0}}/>
    </CardStyled>
  )
}

export default FavouriteProduct