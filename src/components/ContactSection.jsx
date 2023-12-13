import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";

function ContactSection({id}){

    const note = 'Questions? Hire us for your next event? Send a message!';

    return(
        <ContactContainer id={id}>
            <Title text='contact us'/>
            <Body>{note}</Body>
            <TextInput type='text' placeholder='send us a message'/>
            <SubmitButton>send</SubmitButton>
        </ContactContainer>
    )
}

const Body = styled.span`
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: .8rem;

    color: ${props=>props.theme.color};

`
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props=>props.theme.back2};

    padding-bottom: 3rem;
`
const TextInput = styled.input`
    width: 90%;
    height: 6rem;

    margin-top: 1rem;
    margin-bottom: 0;

    border-radius: 1rem;
    border: none;

    text-align: center;

    background-color: ${props=>props.theme.background};
`
const SubmitButton = styled.button`
    width: 90%;
    height: 3rem;

    margin: 1rem;
    margin-top: 0.5rem;

    border-radius: 1rem;
    border: none;

    color: ${props=>props.theme.back2};
    background-color: ${props=>props.theme.color};
`

export default ContactSection;