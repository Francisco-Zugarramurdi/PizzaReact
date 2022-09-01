import styled from "styled-components"
export const TitleStyled  = styled.div`
    color: ${props => (props.secondary ? 'var(--darkest-orange)' : 'black')};
    color: ${props => (props.color ? props.color : 'black')};
    margin-top: ${props => (props.secondary ? '10%' : '0')};
    font-size: ${props => (props.size ? props.size : '2em')};
    font-family: 'RalewayExtraBold';
    text-align: center;
    font-weight: 700;
`