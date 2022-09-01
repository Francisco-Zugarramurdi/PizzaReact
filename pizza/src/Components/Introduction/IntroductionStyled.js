import styled from "styled-components";
export const IntroContainerStyled = styled.div`
    position: relative;
    background-color: #030506 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 10px black);
    p{
        font-family: 'RalewayExtraBold';
        color:var(--orange);
        font-size: 1.5em;
        text-align: center;
        width: 80%;
        padding: 5%;
        padding-bottom:2%;
    }
    img:first-of-type{
        width: 40%;
        filter: drop-shadow(0 0 10px #1a1000);
        transform: rotate(25deg);

    }
`

export const TomatoStyled = styled.img`
    position: absolute;
    width: 100px;
    top: 70px;
    left:-50px;
    transform: rotate(50deg);
`