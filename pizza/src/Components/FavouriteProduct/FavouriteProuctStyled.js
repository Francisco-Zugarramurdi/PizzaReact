import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CardStyled = styled.div`
    position: relative;
    width: 20%;
    margin: 5%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align:center;
    z-index: 3;
    img{
        width: 130%;
        position: absolute;
        z-index: 0;
        opacity: .25;
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
