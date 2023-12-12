import styled from "styled-components";

function HomeSection({address}){

    return(
        <HomeContainer>
            <GeminiText><span>Gemini</span></GeminiText>
            <Text>coffee co</Text>
            <Address> {address} </Address>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    height: 75vh;

    color: ${props=>props.theme.color};

    margin: 1rem;
`
const GeminiText = styled.div`
    font-family: 'Megrim', sans-serif;
    font-size: 4rem;

    margin-top:25vh;

    height: 4.4rem;
`
const Text = styled.div`
    font-weight: 800;
    font-size: 1.1rem;
`
const Address = styled.div`
    margin-top: 30vh;
    font-weight: 500;
`

export default HomeSection;