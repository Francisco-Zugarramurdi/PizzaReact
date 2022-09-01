import styled from "styled-components"
import { motion } from "framer-motion"
export const FavourtiesStyled = styled.div`
    margin: 0;
    width: 100%;
    background-color: var(--grey-background);
`
export const CardStyled = styled.div`
    position: relative;
    width: 20%;
    margin: 5%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align:center;
    img{
        width: 130%;
        position: absolute;
        z-index: 3;
    }
    h3{
        font-size: 3em;
        font-weight: 800;
    }
    p{
        font-size: 1.5em;        
    }
    span{
        font-size: 2em;
        font-weight: 900;
    }
`
