import styled from "styled-components";
import HeartIcon from "../assets/HeartIcon";

function MenuItem({name, price, description, longDesc, img, selected, onClick}){
    function formatCurrency(num) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(num);
    }

    const currentlySel = selected == name;

    return(
        <MenuItemContainer onClick={onClick}>
            <CondesedDescContainer currentlySel={currentlySel}>
                <MenuItemImg src={img} currentlySel={currentlySel}/>
                <DescContainer>
                    <MenuItemName>{name.toLowerCase()}</MenuItemName>
                    <MenuItemDescription>{description.toLowerCase()}</MenuItemDescription>
                </DescContainer>
                <MenuItemPrice><span>{formatCurrency(price)}</span></MenuItemPrice>
            </CondesedDescContainer>
            { currentlySel &&
                <ExtendedDescContainer>
                    <ExtendedDesc>{longDesc.toLowerCase()}</ExtendedDesc>
                    <HeartIcon width='23px' filled={false}/>
                </ExtendedDescContainer>
            }
        </MenuItemContainer>
    )
}

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
    padding-bottom: .75rem;
    padding-right: .75rem;
`




export default MenuItem;