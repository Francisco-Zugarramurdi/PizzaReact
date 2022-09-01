import React from 'react'
import { AnimatePresence } from 'framer-motion'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import { ProductStyled, DataStyled } from './ProductContainerStyled'
import { useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart-actions' 
const ProductContainer = ({category, img, name, price, desc, selected,id}) => {
    const mounted = useRef(true);
    const dispatch = useDispatch();
    

    useEffect(() => {
        mounted.current = false;
        console.log(mounted.current)
        console.log( name+"="+ (selected == category))

        return () => {
            mounted.current = false;
        };
    }, []);
    
    
  return (
    
   <AnimatePresence>
    {

        (`${selected}`== `${category}` || mounted.current || `${selected}`== "All") &&  
         <ProductStyled 
        initial = {{scale: 0}}
        animate = {{scale: 1}}
        transition ={{duration: 0.2}}
        key = {id}>
        <DataStyled>
        <img src={img}/>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{desc}</p>
        </DataStyled>
        <AddToCartButton onClick={()=>dispatch(cartActions.addProductToCart({img,name,price,desc,id}))} ></AddToCartButton>
        </ProductStyled>
    }
   </AnimatePresence>

  )
}

export default ProductContainer

