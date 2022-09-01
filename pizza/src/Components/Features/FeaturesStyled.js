import styled from "styled-components"
export const FeaturesStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HorizontalLineStyled = styled.div`
    margin-top: 5%;
    width: 80%;
    height: 4px;
    background-color: var(--orange);
`
export const FeatureStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    text-align: center;
    width: 33%;
    span{
        font-size: 10em;
        color: var(--orange);
    }
    h3{
        margin-top: 2%;
        font-size: 1.6em;
    }
    p{
        font-size: 1.3em;
        max-width: 60%;
        padding: 4% 0;
        span{
            font-size: 1.3em;
            font-weight: 600;
            color: var(--darkest-orange);
        }
    }

`