import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";
import MenuItem from "./MenuItem";
import { useState } from "react";

function MenuSection(){
    const [selected, setSelected] = useState('');

    function handleClick(name){
        console.log('clicked ' + name)
        if(name===selected){
            setSelected('');
        } else {
            setSelected(name);
        }
    }

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
        longDescription: 'Experience the pure taste of espresso mellowed with hot water in this classic Americano, a coffee-shop favorite for its rich yet smooth flavor.',
        img: 'americano',
    },
    {
        name: 'Cappuccino',
        type: 'drink',
        price: 4.00,
        description: 'Espresso, Milk, and Foamy Top',
        longDescription: 'Enjoy a perfect balance of espresso, steamed milk, and a frothy top layer that makes every sip a creamy delight in our classic Cappuccino.',
        img: 'cappuccino',
    },
    {
        name: 'Latte',
        type: 'drink',
        price: 4.50,
        description: 'Espresso and Steamed Milk',
        longDescription: 'Savor the smoothness of steamed milk over a double shot of espresso in our Latte, a creamy coffee creation for a soothing experience.',
        img: 'latte',
    },
    {
        name: 'Mocha',
        type: 'drink',
        price: 4.50,
        description: 'Espresso with Chocolate',
        longDescription: 'Indulge in the rich blend of chocolate syrup and espresso, crowned with whipped cream and a dusting of cocoa, in our luxurious Mocha.',
        img: 'mocha',
    },
    {
        name: 'Cold Brew',
        type: 'drink',
        price: 4.50,
        description: 'Iced Coffee Concentrate',
        longDescription: 'Refresh yourself with our Cold Brew, a specially steeped coffee served over ice for a strong yet smooth flavor that is perfect on a hot day.',
        img: 'coldBrew',
    },
    {
        name: 'Chai Latte',
        type: 'drink',
        price: 4.50,
        description: 'Chai blend with Milk',
        longDescription: 'Warm up with our Chai Latte, where spiced black tea meets creamy milk for a comforting, aromatic beverage that is both sweet and spicy.',
        img: 'chaiLatte',
    },
    {
        name: 'Caramel Drizzle Latte',
        type: 'drink',
        price: 5.00,
        description: 'Latte drizzled with Caramel',
        longDescription: 'Get lost in the decadence of our Caramel Drizzle Latte, featuring a sumptuous blend of milk and espresso, all finished with a luscious caramel topping.',
        img: 'caramelDrizzleLatte',
    },
    {
        name: 'Honey Lavender Latte',
        type: 'drink',
        price: 5.00,
        description: 'Latte with Lavender and Honey',
        longDescription: 'Delight in the unique pairing of floral lavender and sweet honey with our espresso in this tranquil Honey Lavender Latte.',
        img: 'honeyLavenderLatte',
    },
    {
        name: 'Blackberry Latte',
        type: 'drink',
        price: 5.00,
        description: 'Latte with Blackberry',
        longDescription: 'Treat your senses to our Blackberry Latte, where the tartness of blackberry infuses with espresso for a fruity twist on a coffee classic.',
        img: 'blackberryLatte',
    },
    {
        name: 'The Twins Brew',
        type: 'drink',
        price: 5.00,
        description: 'Cold Brew with Vanilla and Caramel',
        longDescription: 'The Twins Brew is our signature cold brew coffee enhanced with the sweetness of vanilla and rich caramel for a truly indulgent iced coffee experience.',
        img: 'theTwinsBrew',
    },
    {
        name: 'White Chocolate Mocha',
        type: 'drink',
        price: 5.00,
        description: 'Espresso with White Chocolate Sauce',
        longDescription: 'Our White Chocolate Mocha combines espresso with velvety white chocolate sauce, creating a sweet and satisfying coffee treat.',
        img: 'whiteChocolateMocha',
    },
    {
        name: 'Muffins',
        type: 'food',
        price: 4.00,
        description: 'Blueberry or Chocolate Chip Muffin',
        longDescription: 'Whether you are in the mood for a fruity or chocolaty treat, our freshly baked muffins come in blueberry or chocolate chip varieties to satisfy your craving.',
        img: 'muffin',
    },
    {
        name: 'Banana Bread',
        type: 'food',
        price: 3.50,
        description: 'Banana Bread Slice',
        longDescription: 'Our Banana Bread is a moist, sweet treat, baked fresh with ripe bananas and a hint of vanilla that pairs perfectly with your favorite coffee.',
        img: 'bananaBread',
    },
    {
        name: 'Cookies',
        type: 'food',
        price: 3.50,
        description: 'Fresh Cookies',
        longDescription: 'Bite into the comfort of our homemade cookies, available in chocolate chip, double chocolate, or white chocolate macadamia, each offering a rich, melt-in-your-mouth texture.',
        img: 'cookie',
    }
];


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
                                    longDesc={item.longDescription}
                                    selected={selected}
                                    onClick={()=>handleClick(item.name)}
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
                                    longDesc={item.longDescription}
                                    selected={selected}
                                    onClick={()=>handleClick(item.name)}
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