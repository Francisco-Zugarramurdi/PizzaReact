import styled from "styled-components"
import { motion } from "framer-motion"
export const ProductStyled = styled(motion.div)`
    margin: 1%;
    padding: 1%;
    width: 28%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    color: var(--darkest-orange);
    background-color: #efefef;
    border: var(--darkest-orange) 3px solid;
    text-align: center;
`
export const DataStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin-top: 5%;
        width: 80%;
    }
    h2{
        font-size: 2em;
        margin: 3%;
    }
    p:first-of-type{
        font-size: 1.5em;
        font-family: 'RalewayBold';
    }
    p{
        margin: 3%;
    }
`