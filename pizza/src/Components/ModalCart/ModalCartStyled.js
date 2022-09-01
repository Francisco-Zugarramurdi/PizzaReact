import styled from "styled-components";
import {motion} from "framer-motion";
export const ContainerStyled = styled(motion.div)`
    width: 20%;
    height: 100vh;
    padding: 1%;
    background-color: var(--darkest-orange);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CloseBtnStyled = styled(motion.button)`
    color:white;
    background-color: var(--orange);
    text-align: center;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    font-size: 1em;
    font-weight: 800;
    border: 5px outset var(--dark-orange);
    display: block;
`

export const HorizontalLineStyled = styled.div`
    margin-top: 5%;
    width: 80%;
    height: 2px;
    background-color: var(--orange);
`
export const TotalPriceStyled = styled.div`
    margin-top: 2%;
    font-size: 1.2em;
    color: white;

`
export const PlaceOrderButtonStyled = styled(motion.button)`
    width: 50%;
    padding: 2%;
    border-radius: 1em;
    border: none;
    background-color: var(--orange);
    color:white;
    font-weight: 600;
    margin-top: 3%;
`