import styled from "styled-components";
import { useState } from "react";

import Logo from "../assets/Logo"
import BurgerIcon from "../assets/BurgerIcon";

function Header({changeTheme}){
    const [burgerOpen, changeBurgerState] = useState(false);

    function toggleBurger(){
        console.log("toggling burger")
        changeBurgerState(!burgerOpen);
    }

    return(
        <HeaderContainer>
            <Logo width='45px' onClick={changeTheme}/>
            <BurgerBack burgerOpen={burgerOpen}> <BurgerIcon width='40px' onClick={toggleBurger} burgerOpen={burgerOpen}/> </BurgerBack>
            { burgerOpen &&
                <MenuContainer>
                    <MenuItem ><span>home</span></MenuItem>
                    <MenuItem><span>menu</span></MenuItem>
                    <MenuItem><span>location</span></MenuItem>
                    <MenuItem><span>our story</span></MenuItem>
                    <MenuItem><span>stay connected</span></MenuItem>
                    <MenuItem><span>contact us</span></MenuItem>
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

    flex:1.5;

    background-color: ${props=>props.theme.back2};
    color: ${props=>props.theme.color};

    font-weight: 700;
`
const BurgerBack = styled.div`
    background-color: ${props=>props.burgerOpen ? props.theme.color : props.theme.back1};
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
    height: 40vh;

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

    margin: .25rem;
    margin-left: 1rem;
    margin-bottom: auto;
`

export default Header;