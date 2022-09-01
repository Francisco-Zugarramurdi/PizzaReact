import styled from "styled-components"
import { motion } from "framer-motion"
export const ProductContainerStyled = styled.div`
    width: 80%;
    margin: 2% 0;
    padding: 4%;
    background-color: var(--dark-orange);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 1em;
`
export const ProductTitleStyled = styled.div`
    color: white;
    font-size: 1.2em;
    font-family: 'RalewayBold';
`
export const ProductPriceStyled = styled.div`
    font-size: 1.2em;
    color: var(--orange);
`
export const TitlePriceContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    
`
export const AmountContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    gap: 4%;
`
export const ProductAmountStyled = styled.div`
    width: 33%;
    display: flex;  
    border-radius: 1em;
    align-items: center;
    justify-content: center;
    padding: 2%;
    color: white;
    font-family: 'RalewayExtraBold';
    background-color: var(--orange);
    font-size: 1.3em;
`
export const ButtonAmountButtonStyled = styled(motion.button)`
    width: 33%;
    padding: 2%;
    border-radius: 1em;
    border: none;
    background-color: var(--orange);
    color:white;
    font-weight: 900;
    font-family: 'RalewayExtraBold';
    font-size: 1.3em;

`