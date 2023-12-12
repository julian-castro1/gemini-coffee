import styled from "styled-components";
import HeartIcon from "../assets/HeartIcon";
import { useState, useEffect } from "react";

function MenuItem({name, price, description, longDesc, img, selected, onClick}){
    // Initialize state with data from local storage if available
    const [heart, changeHeart] = useState(() => {
        const savedData = localStorage.getItem(name);
        return savedData ? JSON.parse(savedData) : 'false';
    });

    // Update local storage when data changes
    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(heart));
    }, [heart]);

    function toggleHeart(){
        changeHeart(heart == 'false' ? 'true' : 'false');
    }

    const filled = heart == 'true';

    function formatCurrency(num) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(num);
    }

    const currentlySel = selected == name;

    return(
        <MenuItemContainer>
            <CondesedDescContainer currentlySel={currentlySel} onClick={onClick}>
                <MenuItemImg src={img} currentlySel={currentlySel}/>
                <DescContainer>
                    <MenuItemName>{name.toLowerCase()}</MenuItemName>
                    <MenuItemDescription>{description.toLowerCase()}</MenuItemDescription>
                </DescContainer>
                <InfoContainer>
                    {filled && <HeartIcon onClick={toggleHeart} width='13px' filled={filled}/>}
                    <MenuItemPrice><span>{formatCurrency(price)}</span></MenuItemPrice>
                </InfoContainer>
            </CondesedDescContainer>
            { currentlySel &&
                <ExtendedDescContainer>
                    <ExtendedDesc>{longDesc.toLowerCase()}</ExtendedDesc>
                    <HeartIcon onClick={toggleHeart} width='23px' filled={filled}/>
                </ExtendedDescContainer>
            }
        </MenuItemContainer>
    )
}

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    padding: .75rem;
    padding-bottom: .5rem;
`
const ExtendedDescContainer = styled.div`
    display: flex;
    align-items: center;

    text-align: left;
    
    color: ${props=>props.theme.color};
    font-size: .8rem;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 1.5rem;

    gap: 1rem;
`
const ExtendedDesc = styled.div`
    flex:3;
`

const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props=>props.theme.background};
    border-radius: 1rem;
    width: 90%;
`
const CondesedDescContainer = styled.div`
    display: flex;
    
    width: 100%;
    color: ${props=>props.theme.color};

    border: ${props=>props.currentlySel ? `1px solid ${props.theme.accentColor}` : '0'};
    /* border-radius: 1rem; */
    border-top: none;
    border-left: none;
    border-right: none;
`;
const MenuItemImg = styled.img`
    flex: 1;
    height: 6rem;
    max-width: auto;

    border-radius: ${props=>props.currentlySel ? '1rem 0 0 0' : '1rem 0 0 1rem'};

    background-color: ${props=>props.theme.color};
`
const DescContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: 1rem;
`
const MenuItemName = styled.div`
    font-weight: 700;
    font-size: 1.1rem;
    text-align: left;
`
const MenuItemDescription = styled.div`
    font-weight: 300;
    font-size: .7rem;
    text-align: left;
`
const MenuItemPrice = styled.div`
    flex: .2;
    display: flex;
    justify-content: right;

    font-weight: 200;

    font-size: .8rem;

    margin-top: auto;
`




export default MenuItem;