import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";

function LocationSection({id, address}){

    const days = 'Open Monday - Saturday';
    const hours = '6am - 2pm';
    const disc = 'Please note that we are a mobile coffee business and do offer event services. Please check our instagram page for location updates.';
    const textSize = '.8rem';
    const fontWeight = '400';

    return(
        <LocationContainer id={id}>
            <Title text='location'/>
            <SubTitle text={address} textSize='1rem' fontWeight='600'/>
            <SubTitle text={days} textSize={textSize} fontWeight={fontWeight}/>
            <SubTitle text={hours} textSize={textSize} fontWeight={fontWeight}/>
            <SubTitle text={disc} textSize={textSize} fontWeight={fontWeight}/>
        </LocationContainer>
    )
}

const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 1.5rem 2.25rem 1.5rem;

    background-color: ${props=>props.theme.background};
    /* font-size: .8rem; */
    gap: .5rem;
`

export default LocationSection;