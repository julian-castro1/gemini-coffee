import styled from "styled-components";
import Title from "./Title";
import usImg from "../assets/couple.png";
import SubTitle from "./SubTitle";

function StorySection({id}){

    const story = 'Founded by coffee lovers, Rhianna and Julian, Gemini Coffee Company was created to bring craft coffee culture to the Northern Houston area. We strive to deliver more than just great coffee; we aim to create experiences that brighten your day and inspire meaningful moments. Started with a simple espresso machine, we at Gemini look forward to connecting with our community as we continue to grow.';

    return(
        <StoryContainer id={id}>
            <Title text='our story'/>
            {/* <ImageContainer src={usImg}/> */}
            {/* <SubTitle text={story}/> */}
            <Body>{story}</Body>
        </StoryContainer>
    )
}

const Body = styled.span`
    padding-left: .7rem;
    padding-right: .7rem;
    padding-bottom: 1.75rem;
    font-size: .8rem;

    
    color: ${props=>props.theme.color};

`
const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    padding-bottom: 1.5rem;
    padding-top: 0rem;

    background-color: ${props=>props.theme.back2};
`
const ImageContainer = styled.img`
    width: 90%;
    /* height: 20rem; */

    border-radius: 1rem;

    padding-bottom: 0;

    background-color: ${props=>props.theme.color};
`

export default StorySection;