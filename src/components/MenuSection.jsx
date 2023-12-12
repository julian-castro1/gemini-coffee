import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";

function MenuSection(){

    const syrups = 'add syrup (caramel, vanilla, mocha) for $0.50';
    const milks = 'available with whole, 2%, almond, and oat milk';

    return(
        <MenuContainer>
            <CoffeeSection>
                <Title text='coffee'/>
                <SubTitle text={syrups}/>
                <SubTitle text={milks}/>
            </CoffeeSection>
            <BitesSection>
                
            </BitesSection>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props=>props.theme.back2};

    height: 70vh;
`
const CoffeeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 3rem;
`
const BitesSection = styled.div`

`

export default MenuSection;