import styled from "styled-components";
import Title from "./Title";

function ConnectedSection({id}){

    const text = 'Connect with us on social media to keep up with new releases and location changes!'; 
    const IGhandle = '@geminicoffee.co'

    return(
        <ConnectedContainer id={id}>
            <Title text='stay connected'/>
            <Body>{text}</Body>
            <Body>{IGhandle}</Body>
        </ConnectedContainer>
    )
}

const ConnectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    padding: 0 1.5rem 2.25rem 1.5rem;
`
const Body = styled.span`
    padding-left: .7rem;
    padding-right: .7rem;
    padding-top: ${props=>props.signoff ? '1.5rem' : '0'};
    font-size: .8rem;

    
    color: ${props=>props.theme.color};

`

export default ConnectedSection;