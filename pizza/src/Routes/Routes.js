import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import AboutUs from '../Pages/AboutUs/AboutUs'
const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route exact path='/products' element = {<Products/>}/>
        <Route exact path='/aboutUs' element = {<AboutUs/>}/>
        <Route exact path='/' element = {<Home/>}/>
    </ReactDomRoutes>
  )
}

export default Routes