import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoContainerStyled, ModalOverlayStyled, NavbarContainerStyled, NavContainerStyled, NavLi, NavList } from './NavbarStyles'
import { CgShoppingCart } from 'react-icons/cg'
import {motion, AnimatePresence} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../Redux/cart-actions'
import ModalCart from '../ModalCart/ModalCart'

const Navbar = () => {
    const hiddenCart = useSelector(state => state.cart.hidden)
    const dispatch = useDispatch();
    return (
        <NavbarContainerStyled>
        <AnimatePresence>
            {!hiddenCart && <ModalOverlayStyled onClick={()=> dispatch(cartActions.toggleHiddenCart())}/>}
            {!hiddenCart && <ModalCart closeModal={()=> dispatch(cartActions.toggleHiddenCart())}/>}         
        </AnimatePresence>
        <LogoContainerStyled>
            <motion.h1 whileHover = {{scale: 1.2, transition: { duration: 0.2 }}}>
            <Link to="/">
            <span>π</span>zza 
            </Link>
            </motion.h1>
        </LogoContainerStyled>
        <NavContainerStyled>
            <NavList>
                <NavLi whileHover = {{scale: 1.2, transition: { duration: 0.2 } }}><Link to="/products">Products</Link></NavLi>
                <NavLi whileHover = {{scale: 1.2, transition: { duration: 0.2 } }}><Link to="/aboutUs">About us</Link></NavLi>
                <NavLi whileHover = {{scale: 1.2, transition: { duration: 0.2 } }} onClick={()=>dispatch(cartActions.toggleHiddenCart())}><CgShoppingCart/></NavLi>
            </NavList>
        </NavContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar