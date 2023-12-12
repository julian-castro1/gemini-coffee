import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";

function LocationSection(){

    return(
        <LocationContainer>
            <Title text='location'/>
            <SubTitle text='2706 campbell st houston, tx 77026'/>
        </LocationContainer>
    )
}

const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 1.5rem;

    background-color: ${props=>props.theme.background};
`

export default LocationSection;