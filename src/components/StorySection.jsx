import styled from "styled-components";
import Title from "./Title";
import usImg from "../assets/couple.png";

function StorySection(){

    return(
        <StoryContainer>
            <Title text='our story'/>
            <ImageContainer src={usImg}/>
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
const ImageContainer = styled.img`
    width: 90%;
    /* height: 20rem; */

    border-radius: 1rem;

    padding-bottom: 0;
    margin-bottom: 0;

    background-color: ${props=>props.theme.color};
`

export default StorySection;