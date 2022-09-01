import styled from "styled-components";
import { motion } from "framer-motion";
export const ProductsWrapperStyled = styled.div`
    width: 100%;
    height: auto;
    background-color: var(--grey-background);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const HorizontalLineStyled = styled.div`
    margin-top: 3%;
    width: 80%;
    height: 4px;
    background-color: var(--orange);
`
export const FilterStyled = styled.div`
    margin: 1% 0;
    font-size: 2em;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    color: var(--darkest-orange);
    gap: 3%;
`
export const OptionStyled = styled(motion.div)`
    color: ${props => (props.selected == props.me ? 'var(--orange)' : 'black')};
    font-family: 'RalewayBold';
    cursor: pointer;
`
export const ProductDisplayStyled = styled.div`
    min-height: 60vh;
    width: 80%;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border: #f9be60 2px solid;
    margin: 2%;
`
