import styled from "styled-components";
import { useState, useEffect } from "react";

import Logo from "../assets/Logo"
import BurgerIcon from "../assets/BurgerIcon";

function Header({changeTheme}){
    const [burgerOpen, changeBurgerState] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const closeBurger = () => {
            if(burgerOpen) {
                toggleBurger();
            }
        };

        document.addEventListener('click', closeBurger);

        return () => {
            document.removeEventListener('click', closeBurger);
        };
    }, [burgerOpen]);

    function toggleBurger(){
        event.stopPropagation();
        console.log("toggling burger")
        changeBurgerState(!burgerOpen);
    }

    return(
        <HeaderContainer>
            <Logo width='45px' onClick={changeTheme}/>
            <BurgerBack burgerOpen={burgerOpen}> <BurgerIcon width='40px' onClick={toggleBurger} burgerOpen={burgerOpen}/> </BurgerBack>
            { burgerOpen &&
                <MenuContainer>
                    <MenuItem onClick={() => scrollToSection('home')}><span>home</span></MenuItem>
                    <MenuItem onClick={() => scrollToSection('menu')}><span>menu</span></MenuItem>
                    <MenuItem onClick={() => scrollToSection('location')}><span>location</span></MenuItem>
                    <MenuItem onClick={() => scrollToSection('story')}><span>our story</span></MenuItem>
                    <MenuItem onClick={() => scrollToSection('connected')}><span>stay connected</span></MenuItem>
                    <MenuItem onClick={() => scrollToSection('contact')}><span>contact us</span></MenuItem>
                    <SignInButton><span>sign in</span></SignInButton>
                </MenuContainer>
            }
        </HeaderContainer>
    )
}

const SignInButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: .5rem;

    padding-left: 1rem;
    padding-right: 1rem;

    flex:1.3;

    background-color: ${props=>props.theme.back2};
    color: ${props=>props.theme.color};

    font-weight: 700;
`
const BurgerBack = styled.div`
    background-color: 'none';
    border-radius: 1rem;
    padding: .6rem;

    z-index: 10;
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${props=>props.theme.color};
    border-radius: 1rem;

    position: absolute;
    top: .25rem;
    right: .25rem;

    padding: .5rem;
    padding-top: 4.2rem;

    width: 60vw;
    height: 38vh;

    gap: .35rem;
`
const MenuItem = styled.div`
    display: flex;
    align-items: center;

    border-radius: .5rem;

    padding-left: 1rem;
    padding-right: 1rem;

    flex: 1;

    background-color: ${props=>props.theme.colorContrast};
    color: ${props=>props.theme.back2};

    font-weight: 700;


`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 100;

    padding-left: .75rem;

    background-color: ${props=>props.theme.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`

export default Header;