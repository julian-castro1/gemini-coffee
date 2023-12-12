import styled from "styled-components";
import Title from "./Title";

function StorySection(){

    return(
        <StoryContainer>
            <Title text='our story'/>
        </StoryContainer>
    )
}

const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 1.5rem;

    background-color: ${props=>props.theme.back2};
`

export default StorySection;