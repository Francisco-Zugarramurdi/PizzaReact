import React from 'react'
import {  HomeWrapperStyled, TransitionDivStyled} from './HomeStyled'
import Hero from '../../Components/Hero/Hero'

import Favourties from '../../Components/Favourites/Favourties'
import Features from '../../Components/Features/Features'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <HomeWrapperStyled>
      <Hero/>
      <TransitionDivStyled/>
      <Favourties/>
      <Features/>
    </HomeWrapperStyled>
  )
}

export default Home