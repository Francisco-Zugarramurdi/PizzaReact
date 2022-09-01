import styled from "styled-components"
export const CarrouselStyled = styled.div`
    margin-top: ${props => (props.secondary ? '5%' : '15%')};
    margin-bottom: 15%;
    width: 100%;
    color: var(--darkest-orange);
    display: flex;
    justify-content:space-between;
    align-items: center;
`