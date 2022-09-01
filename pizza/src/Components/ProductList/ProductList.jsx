import React from 'react'
import { products } from '../../Data/products'
import ProductContainer from '../ProductContainer/ProductContainer'
const ProductList = ({selected}) => {
    return (
    <>
        {products.map (products => (
        <ProductContainer 
        category={`${products.category}`}
        img = {products.img}
        name = {products.name}
        price = {products.price}
        desc = {products.desc}
        selected = {selected}
        id = {`${products.id}`}>     
        </ProductContainer>))
        }
    </>
    )
}
 
export default ProductList
// category, img, name, price, desc