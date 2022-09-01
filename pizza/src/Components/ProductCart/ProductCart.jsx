import React from 'react'
import { ProductContainerStyled, ProductTitleStyled, ProductPriceStyled, ProductAmountStyled, ButtonAmountButtonStyled, AmountContainerStyled, TitlePriceContainer } from './ProductCartStyled'
import { useDispatch } from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart-actions';
const ProductCart = ({product}) => {
  const dispatch = useDispatch();
  return (
    <ProductContainerStyled>
      <TitlePriceContainer>
        <ProductTitleStyled>{product.name}</ProductTitleStyled>
        <ProductPriceStyled>{product.price}</ProductPriceStyled>
      </TitlePriceContainer>
    <AmountContainerStyled>
      <ButtonAmountButtonStyled whileTap={{scale:0.8}} onClick={()=> dispatch(cartActions.removeProduct(product.id))}>-</ButtonAmountButtonStyled>
      <ProductAmountStyled>{product.amount}</ProductAmountStyled>
      <ButtonAmountButtonStyled whileTap={{scale:0.8}} onClick={()=> dispatch(cartActions.addProductToCart({img:product.img,name:product.name,price:product.price,desc:product.desc,id:product.id}))}>+</ButtonAmountButtonStyled>
    </AmountContainerStyled>


    </ProductContainerStyled>
  )
}

export default ProductCart

