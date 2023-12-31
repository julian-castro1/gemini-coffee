import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";
import MenuItem from "./MenuItem";
import { useState } from "react";

function MenuSection({id}){
    const [selected, setSelected] = useState('');

    function handleClick(name){
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
        name: 'Chocolate Muffin',
        type: 'food',
        price: 4.00,
        description: 'Chocolate Chip Muffin',
        longDescription: 'Indulge in the rich and comforting taste of our chocolate muffin. Perfect for chocolate lovers seeking a delightful treat',
        img: 'muffin',
    },
    {
        name: 'Blueberry Muffin',
        type: 'food',
        price: 4.00,
        description: 'Blueberry Muffin',
        longDescription: 'Enjoy the fresh, tangy sweetness of our blueberry muffin. This golden, crumbly top is a perfect companion for your coffee or as a standalone snack.',
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
    },
    {
        name: 'Creme Brulee',
        type: 'food',
        price: 7.00,
        description: 'Crunchy Creme Brulee',
        longDescription: 'An exquisite dessert of rich, velvety custard topped with a layer of hard caramelized sugar. Our creme brulee is a study in contrasts: the warm, brittle caramel top gives way to the cool, creamy custard beneath. Each spoonful is a decadent delight, combining smoothness and crunch in a classic French dessert.',
        img: 'cremeBrulee',
    },
    {
        name: 'Yogurt Parfait',
        type: 'food',
        price: 5.00,
        description: 'Yogurt Parfait with strawberries and granola',
        longDescription: 'A refreshing and healthy option, our yogurt parfait layers smooth, creamy yogurt with fresh, seasonal fruits and a sprinkle of granola for a crunchy finish. It is a harmonious blend of tangy and sweet flavors, complemented by varying textures, making it a perfect light breakfast or a wholesome snack.',
        img: 'yogurtParfait',
    },
    {
        name: 'Cheese Danish',
        type: 'food',
        price: 5.00,
        description: 'Cheese Danish',
        longDescription: 'A delightful pastry that combines a flaky, buttery crust with a rich, creamy cheese filling. Our cheese danish is baked to golden perfection, offering a satisfying blend of textures and flavors that is sure to delight any pastry enthusiast. Perfect for pairing with your morning coffee or as a sweet treat any time of day.',
        img: 'cheeseDanish',
    },
    {
        name: 'Coffee Cake',
        type: 'food',
        price: 6.00,
        description: 'Sweet Coffee Cake',
        longDescription: 'Our coffee cake is a moist, tender treat with a rich cinnamon swirl and a crunchy streusel topping. It is the perfect balance of sweetness and spice, making it an ideal companion for your coffee break. Each bite offers a delightful mix of soft cake and crispy topping, creating a comforting and indulgent experience.',
        img: 'coffeeCake',
    },
];


    return(
        <MenuContainer id={id}>
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

    @media (min-width: 768px) {
        padding-left: 10rem;
        padding-right: 10rem;
        padding-bottom: 6rem;
    }
`
const CoffeeSection = styled.div`
    display: flex;
    flex-direction: column;

    width: 95%;
`
const DrinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    gap: .5rem;

    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /* width: 40%; */
        
    }
`
const BitesSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 95%;
`

export default MenuSection;