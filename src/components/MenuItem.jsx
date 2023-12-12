import styled from "styled-components";

function MenuItem({name, price, description, img}){
    function formatCurrency(num) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(num);
    }

    return(
        <MenuItemContainer>
            <MenuItemImg src={img}/>
            <DescContainer>
                <MenuItemName>{name}</MenuItemName>
                <MenuItemDescription>{description}</MenuItemDescription>
            </DescContainer>
            <MenuItemPrice><span>{formatCurrency(price)}</span></MenuItemPrice>
        </MenuItemContainer>
    )
}

const MenuItemContainer = styled.div`
    display: flex;
    width: 90%;

    border-radius: 1rem;

    color: ${props=>props.theme.color};

    background-color: ${props=>props.theme.background};
`;
const MenuItemImg = styled.img`
    flex: 1;
    height: 6rem;

    border-radius: 1rem 0 0 1rem;

    background-color: ${props=>props.theme.color};
`
const DescContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MenuItemName = styled.div`
    font-weight: 700;
    font-size: 1.1rem;
`
const MenuItemDescription = styled.div`
    font-weight: 300;
    font-size: .7rem;
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