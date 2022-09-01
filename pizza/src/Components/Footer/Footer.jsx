import React from 'react'
import { FooterStyled } from './FooterStyled'
import { motion } from 'framer-motion'
import nucba from '../../Assets/Nucba.png'
import GitHub from '../../Assets/GitHub.png'
const Footer = () => {
  return (
    <FooterStyled>
        <p>© πzza co 2022.</p>
        <p>Made by Francisco Zugarramurdi for <motion.img src={nucba} transition = {{duration: 0.2}} whileHover={{ scale: 1.3}}/></p>
        <motion.img src={GitHub} transition = {{duration: 0.2}} whileHover={{scale: 1.3}}/>
    </FooterStyled>
  )
}

export default Footer
