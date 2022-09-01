import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterStyled = styled.div`
    width: 100%;
    padding: 0.5% 0;
    background-color: var(--orange);
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: 600;
    p{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p:first-of-type{
        margin-left: 2%;
        justify-content: flex-start;

    }
    p:last-of-type{
        max-width: 50%;
    }
    p img{
        margin-left: 1%;
        width: 3%;
    }
    >img{
        width: 3%;
        margin-right: 2%;

    }
`
