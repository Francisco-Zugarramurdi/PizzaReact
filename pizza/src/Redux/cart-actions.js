export const TOGGLE_HIDDEN_CART = "TOGGLE_HIDDEN_CART"
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const addProductToCart = product => ({type: ADD_PRODUCT_TO_CART, payload:product})
export const toggleHiddenCart = ()=> ({ type: TOGGLE_HIDDEN_CART})
export const removeProduct = prodcut => ({type:REMOVE_PRODUCT,payload:prodcut})
