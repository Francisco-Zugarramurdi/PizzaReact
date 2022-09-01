import React from 'react'
import { CloseBtnStyled, ContainerStyled, HorizontalLineStyled, PlaceOrderButtonStyled,TotalPriceStyled } from './ModalCartStyled'
import Title from '../Title/Title'
import ProductCart from '../ProductCart/ProductCart'
import {useSelector} from 'react-redux'
const ModalCart = ({closeModal}) => {
  const {cartItems} = useSelector(state => state.cart);
  const total = cartItems.reduce((acc, item) => {

    return (acc += Number(item.price.replace(/[^0-9.-]+/g,"")) * item.amount);

  }, 0)
  return (
    <ContainerStyled
        initial = {{translateX: 600}}
        animate = {{translateX: 0}}
        exit = {{translateX: 600}}
        transition ={{duration: 0.2}}
        key ='cart-modal'
        >
            <CloseBtnStyled whileHover={{scale:1.05, transition: { duration: 0.2}}} onClick={()=>closeModal()} whileTap={{scale: 0.8}}>X</CloseBtnStyled>
            <Title color={"white"}>Your products:</Title> 
            {
              cartItems.map(
                item=>(
                  <ProductCart key ={item.id} product={{...item}}></ProductCart>
                )
              )
            }

            <HorizontalLineStyled/>
            <TotalPriceStyled>
                <h3>Total: $ {total}</h3>
            </TotalPriceStyled>           
            <PlaceOrderButtonStyled whileHover={{scale:1.05, transition: { duration: 0.2}}} whileTap={{scale: 0.8}}>Place Order</PlaceOrderButtonStyled>
        </ContainerStyled>
  )
}

export default ModalCart