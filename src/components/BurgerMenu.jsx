import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import BurgerIcon from "../assets/BurgerIcon";

function BurgerMenu({user, toggleBurger, toggleLogin, signOut}){

    const containerRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                toggleBurger();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleBurger]);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <MenuContainer ref={containerRef}>
            <BurgerBack burgerOpen={true}> <BurgerIcon width='40px' onClick={toggleBurger} burgerOpen={true}/> </BurgerBack>
            <MenuItem onClick={() => scrollToSection('home')}><span>home</span></MenuItem>
            <MenuItem onClick={() => scrollToSection('menu')}><span>menu</span></MenuItem>
            <MenuItem onClick={() => scrollToSection('location')}><span>location</span></MenuItem>
            <MenuItem onClick={() => scrollToSection('story')}><span>our story</span></MenuItem>
            <MenuItem onClick={() => scrollToSection('connected')}><span>stay connected</span></MenuItem>
            <MenuItem onClick={() => scrollToSection('contact')}><span>contact us</span></MenuItem>
            {user ?
                <SignInButton onClick={signOut}><span>sign out</span></SignInButton> :
                <SignInButton onClick={toggleLogin}><span>sign in</span></SignInButton>
            }
        </MenuContainer>
    )
}

const BurgerBack = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;

    /* background-color: 'red'; */
    border-radius: 1rem;

    padding: .4rem;
    padding-top: .5rem;
`
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

    &:hover{
        cursor: pointer;
    }
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    z-index: 12;

    background-color: ${props=>props.theme.color};
    border-radius: 1rem;

    position: fixed;
    top: .25rem;
    right: .25rem;

    padding: .5rem;
    padding-top: 4.2rem;

    width: 15rem;
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

    &:hover{
        cursor: pointer;
    }
`

export default BurgerMenu;