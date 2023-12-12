import styled from "styled-components";

function Title({text}){
    return(
        <TitleContainer>
            {text}
        </TitleContainer>
    )
}

const TitleContainer = styled.h3`
    font-family: 'Megrim', sans-serif;
    font-size: 2rem;
    font-weight: 400;

    color: ${props=>props.theme.color};

    margin: 0;
    margin-top: 2rem;
    padding: 0;
    margin-bottom: 0.5rem;
`

export default Title;