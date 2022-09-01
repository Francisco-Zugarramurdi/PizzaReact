import React, { useState } from 'react'
import Title from "../../Components/Title/Title"
import { ProductStyled, DataStyled, FilterStyled, HorizontalLineStyled, OptionStyled, ProductDisplayStyled, ProductsWrapperStyled } from './ProductsStyled'

import ProductList from '../../Components/ProductList/ProductList'
const Products = () => {
    const [productSelected,SelectProduct] = useState();

    return (
        <ProductsWrapperStyled>
            <Title size ="3em">Our selection of products</Title>
            <HorizontalLineStyled/>
            <FilterStyled>
                <OptionStyled onClick={()=> SelectProduct("All")} selected = {productSelected} me = "All">All</OptionStyled>
                <OptionStyled onClick={()=> SelectProduct("Classic")} selected = {productSelected} me = "Classic">Classic</OptionStyled>
                <OptionStyled onClick={()=> SelectProduct("Combos")} selected = {productSelected} me = "Combos">Combos</OptionStyled>
                <OptionStyled onClick={()=> SelectProduct("Vegan")} selected = {productSelected} me = "Vegan">Vegan</OptionStyled>
                <OptionStyled onClick={()=> SelectProduct("Drinks")} selected = {productSelected} me = "Drinks">Drinks</OptionStyled>
            </FilterStyled>

                <ProductDisplayStyled>
                    <ProductList selected={`${productSelected}`}></ProductList>        
                </ProductDisplayStyled>
        </ProductsWrapperStyled>
  )
}


export default Products