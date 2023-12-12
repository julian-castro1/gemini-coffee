import styled from "styled-components";

function SubTitle({text}){
    return(
        <SubTitleContainer>
            {text}
        </SubTitleContainer>
    )
}

const SubTitleContainer = styled.h3`
    /* font-family: 'Megrim', sans-serif; */
    font-size: 1rem;
    font-weight: 500;

    color: ${props=>props.theme.color};

    margin: 0;
    padding: 0;
`

export default SubTitle;