import styled from 'styled-components'
import {motion} from 'framer-motion'
export const NavbarContainerStyled = styled(motion.div) `
background-color: var(--orange);
width: 100%;
height: 7vh;
display: flex;
justify-content: space-between;
align-items: center;
color: #362100;
z-index: 2;
`
export const LogoContainerStyled = styled.div `
margin-left: 2%;
width:8%;
height: 7vh;
display: flex;
justify-content: flex-start;
align-items: center;
h1{
    font-family: 'RalewayExtraBold';
    span{
        font-family: 'Noto Math';
        font-weight: 600;

    }
}

`
export const NavContainerStyled = styled.div `
    display: flex;
    width: 30%;
    margin-right: 2%;
    height: 7vh;
    align-items: center;
`
export const NavList = styled.ul `
    display: flex;
    width: 100%;
    justify-content: space-around;
`
export const NavLi = styled(motion.li)`
    font-family: 'RalewayBold';
    font-size: 1.2em;
    font-weight: 600;
`
export const ModalOverlayStyled = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5 );
    backdrop-filter: blur(3px);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 60;
`