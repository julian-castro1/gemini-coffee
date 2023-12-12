import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";
import MenuItem from "./MenuItem";

function MenuSection(){

    const syrups = 'add syrup (caramel, vanilla, mocha) for $0.50';
    const milks = 'available with whole, 2%, almond, and oat milk';
    const disclaimer = 'subject to availability'

    const menuOptions = [
        {
            name: 'cappuccino',
            type: 'drink',
            price: 5.50,
            description: 'double shot',
            img: '',
        },
        {
            name: 'latte',
            type: 'drink',
            price: 6.00,
            description: 'double shot',
            img: '',
        },
        {
            name: 'americano',
            type: 'drink',
            price: 4.50,
            description: 'double shot',
            img: '',
        },
        {
            name: 'greek salad',
            type: 'food',
            price: 15.00,
            description: 'double shot',
            img: '',
        },
        {
            name: 'bruschetta',
            type: 'food',
            price: 12.00,
            description: 'double shot',
            img: '',
        },
        {
            name: 'avocado toast',
            type: 'food',
            price: 7.50,
            description: 'double shot',
            img: '',
        },
    ]

    return(
        <MenuContainer>
            <CoffeeSection>
                <Title text='coffee'/>
                <SubTitle text={syrups}/>
                <SubTitle text={milks}/>
                <DrinkItems>
                    {menuOptions.map((item, index)=>{
                        if(item.type==='drink'){
                            return(
                                <MenuItem 
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    img={item.img}
                                />
                            )
                        }
                    })}
                </DrinkItems>
            </CoffeeSection>
            <BitesSection>
                <Title text='bites'/>
                <SubTitle text={disclaimer}/>
                <DrinkItems>
                    {menuOptions.map((item, index)=>{
                        if(item.type==='food'){
                            return(
                                <MenuItem 
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    img={item.img}
                                />
                            )
                        }
                    })}
                </DrinkItems>
            </BitesSection>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props=>props.theme.back2};

    padding-bottom: 1.5rem;
    /* height: 70vh; */
`
const CoffeeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`
const DrinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;

    width: 100%;

    gap: .5rem;
`
const BitesSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`

export default MenuSection;