import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";
import MenuItem from "./MenuItem";

function MenuSection(){

    const syrups = 'add syrup (caramel, vanilla, mocha) for $0.50';
    const milks = 'available with whole, 2%, almond, and oat milk';
    const disclaimer = 'subject to availability'
    const S3URL = 'https://gemini-coffee.s3.us-east-2.amazonaws.com/cute-product/'
    const imgExt = '.png';

    const menuOptions = [
        {
            name: 'Americano',
            type: 'drink',
            price: 4.00,
            description: 'Espresso and Water',
            longDescription: 'A classic black coffee made by diluting rich espresso with hot water.',
            img: 'americano',
        },
        {
            name: 'Cappuccino',
            type: 'drink',
            price: 4.00,
            description: 'Espresso, Milk, and Foamy Top',
            longDescription: 'A balanced espresso and steamed milk with a frothy foam top.',
            img: 'cappuccino',
        },
        {
            name: 'Latte',
            type: 'drink',
            price: 4.50,
            description: 'Espresso and Steamed Milk',
            longDescription: 'Espresso meets silky steamed milk for a smooth coffee.',
            img: 'latte',
        },
        {
            name: 'Mocha',
            type: 'drink',
            price: 4.50,
            description: 'Espresso with Chocolate',
            longDescription: 'Espresso combined with chocolate syrup, topped with cocoa.',
            img: 'mocha',
        },
        {
            name: 'Cold Brew',
            type: 'drink',
            price: 4.50,
            description: 'Iced Coffee Concentrate',
            longDescription: 'A strong, smooth cold brew concentrate.',
            img: 'coldBrew',
        },
        {
            name: 'Chai Latte',
            type: 'drink',
            price: 4.50,
            description: 'Chai blend with Milk',
            longDescription: 'Spiced black tea blended with creamy milk.',
            img: 'chaiLatte',
        },
        {
            name: 'Caramel Drizzle Latte',
            type: 'drink',
            price: 5.00,
            description: 'Latte drizzled with Caramel',
            longDescription: 'Espresso layered with milk and sweet caramel drizzle.',
            img: 'caramelDrizzleLatte',
        },
        {
            name: 'Honey Lavender Latte',
            type: 'drink',
            price: 5.00,
            description: 'Latte with Lavender and Honey',
            longDescription: 'A blend of espresso, lavender syrup, and honey.',
            img: 'honeyLavenderLatte',
        },
        {
            name: 'Blackberry Latte',
            type: 'drink',
            price: 5.00,
            description: 'Latte with Blackberry',
            longDescription: 'Espresso with a burst of blackberry flavor.',
            img: 'blackberryLatte',
        },
        {
            name: 'The Twins Brew',
            type: 'drink',
            price: 5.00,
            description: 'Cold Brew with Vanilla and Caramel',
            longDescription: 'Cold brew coffee paired with vanilla cream and caramel syrup.',
            img: 'theTwinsBrew',
        },
        {
            name: 'White Chocolate Mocha',
            type: 'drink',
            price: 5.00,
            description: 'Espresso with White Chocolate Sauce',
            longDescription: 'Espresso combined with white chocolate sauce.',
            img: 'whiteChocolateMocha',
        },
        {
            name: 'Muffins',
            type: 'food',
            price: 4.00,
            description: 'Blueberry or Chocolate Chip Muffin',
            longDescription: 'Choose from Blueberry or Chocolate Chip large muffins.',
            img: 'muffin',
        },
        {
            name: 'Banana Bread',
            type: 'food',
            price: 3.50,
            description: 'Banana Bread Slice',
            longDescription: 'Freshly baked banana bread.',
            img: 'bananaBread',
        },
        {
            name: 'Cookies',
            type: 'food',
            price: 3.50,
            description: 'Fresh Cookies',
            longDescription: 'Choose from Chocolate Chip, Double Chocolate, or White Chocolate Macadamia (Two Cookies).',
            img: 'cookie',
        }
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
                                    img={S3URL + item.img + imgExt}
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
                                    img={S3URL + item.img + imgExt}
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