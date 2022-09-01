import React from 'react'
import { FavourtiesStyled, CardStyled, AddToCartButtonStyled } from './FavouritesStyled'
import Title from '../Title/Title'
import Carrousel from '../Carrousel/Carrousel'
import FavouriteProduct from '../FavouriteProduct/FavouriteProduct'
import { useSelector } from 'react-redux/es/exports'
const Favourties = () => {
  const selector = useSelector(state => state.favourites.favourites);
  return (
    <FavourtiesStyled>
        <Title size='3em'>Customers' choice</Title>

        <Carrousel>
          {selector.map(
            selector=>(
              <FavouriteProduct id={selector.id} {...selector}></FavouriteProduct>
            )
          )}

        </Carrousel>
      </FavourtiesStyled>    
  )
}

export default Favourties