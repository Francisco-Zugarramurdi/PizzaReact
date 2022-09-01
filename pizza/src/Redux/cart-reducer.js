import React from 'react'
import { ADD_PRODUCT_TO_CART, TOGGLE_HIDDEN_CART, CHANGE_PRODUCT_AMOUNT, REMOVE_PRODUCT } from './cart-actions'
const INITIAL_STATE = {
    cartItems:[],
    hidden: true,
}
const cartReducer = (state=INITIAL_STATE, action) => {
    
    switch(action.type){
        case TOGGLE_HIDDEN_CART:
        return{
            ...state,
            hidden:!state.hidden,
        }
        case ADD_PRODUCT_TO_CART:
            return{
                ...state,
                cartItems: AddProduct(state.cartItems,action.payload)
            }
        case REMOVE_PRODUCT:
            return{
                state,
                cartItems:RemoveProduct(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

const RemoveProduct = (products,id)=>{
    const productToRemove = products.find(item => item.id === id);
    console.log("---")
    console.log(productToRemove);
    if(productToRemove.amount > 1){
        return products.map(item =>
            item.id === productToRemove.id
              ? { ...item, amount: item.amount - 1 }
              : item
          );
    }
    return products.filter(item => item.id !== productToRemove.id);
}
const AddProduct = (products,selected) => {
    const inCart = products.find(item=>item.id === selected.id);
    if(inCart){

        return  products.map(item => 
            item.id === inCart.id ?{
                ...item,
                amount: item.amount + 1
    
            }:item
        )
    }
    return [...products,{...selected,amount:1}]
   
}

export default cartReducer