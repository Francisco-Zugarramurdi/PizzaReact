import React from 'react'
import Title from '../Title/Title'
import { IntroContainerStyled, TomatoStyled } from './IntroductionStyled'
import Pizza from '../../Assets/Peel.png'
import Tomato from "../../Assets/tomato.png"
const Introduction = () => {
    return (
        <IntroContainerStyled>
            <Title color={"white"} size={"3em"}>What's our phiolosophy</Title>
            <p>Founded in 1987 by the famous chef Juliette Adams we aim to establish a new way to aproach fast food, not from cheapness but our aim is at trying to integrate the fresh and homemade feeling of food and the high  costumer service standards that our industry demands.</p>
            <img src={Pizza} alt="" />
            <TomatoStyled src={Tomato}/>
        </IntroContainerStyled>
    )
}

export default Introduction