import styled from "styled-components"
import { motion } from "framer-motion"
export const AddToCartButtonStyled = styled(motion.button)`
    width: 50%;
    padding: 2%;
    border-radius: 1em;
    border: none;
    background-color: var(--orange);
    color:white;
    font-weight: 900;
    margin-top: 3%;
    font-size: 1.5em;
    z-index: 2;
    filter: drop-shadow(20%, --dark-orange);

`