import styled from "styled-components";
import Title from "./Title";
import usImg from "../assets/couple.png";
import SubTitle from "./SubTitle";

function StorySection(){

    const story = 'This coffee shop was founded by Rhianna and Julian. Moving from Austin, we missed the cofffee shop culture and wanted to bring it to our new home. We hope you enjoy our coffee as much as we do!';

    return(
        <StoryContainer>
            <Title text='our story'/>
            {/* <ImageContainer src={usImg}/> */}
            {/* <SubTitle text={story}/> */}
            <Body>{story}</Body>
        </StoryContainer>
    )
}

const Body = styled.span`
    padding-left: 1rem;
    padding-right: 1rem;
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