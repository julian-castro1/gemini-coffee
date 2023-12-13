import styled from "styled-components";

function SubTitle({text, textSize='1rem', fontWeight='500'}){
    return(
        <SubTitleContainer textSize={textSize} fontWeight={fontWeight}>
            {text}
        </SubTitleContainer>
    )
}

const SubTitleContainer = styled.h3`
    font-family: 'roboto', sans-serif;
    font-size: ${props=>props.textSize};
    font-weight: ${props=>props.fontWeight};

    color: ${props=>props.theme.color};

    margin: 0;
    padding: 0;
`

export default SubTitle;