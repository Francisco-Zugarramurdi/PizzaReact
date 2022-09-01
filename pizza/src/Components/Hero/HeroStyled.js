import styled from "styled-components"
import { motion } from "framer-motion"
export const HeroStyled = styled.div`
    width: 100%;
    height: 95vh;
    background: linear-gradient(180deg, #f9be60 0%, #d79223 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SloganStyled = styled.div`
    text-align: center;
    margin-bottom: 20%;
    h2{
        font-size: 4em;
        display: block;
        font-weight: 900;
        color: var(--darkest-orange);
        span{
            font-family: 'Noto Math';
            font-weight:900;

        }
    }
    p{
        font-size: 2em;
        font-weight: 400;
    }

`

export const BigPizzaStyled = styled(motion.img)`
    position: absolute;
    top: 60vh;
    height: 80vh;
`