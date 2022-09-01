import React from 'react'
import Introduction from '../../Components/Introduction/Introduction'
import { AboutUsWrapperStyled } from './AboutUsStyled'
import Juliette from '../../Assets/JulietteAdams.jpg'
import Hands from '../../Assets/Hands.jpg'
const AboutUs = () => {
  return (
    <AboutUsWrapperStyled>
        <img src={Juliette} alt="A picture of Juliette Adams" />
        <Introduction/>
        <img src={Hands} alt="" />   
    </AboutUsWrapperStyled>
  )
}

export default AboutUs