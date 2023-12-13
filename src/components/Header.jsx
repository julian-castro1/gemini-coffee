import styled from "styled-components";

import Logo from "../assets/Logo"
import BurgerIcon from "../assets/BurgerIcon";

function Header({user, changeTheme, toggleBurger, burgerOpen}){

    return(
        <HeaderContainer>
            <Logo width='45px' onClick={changeTheme}/>
            <span>{user && user.email}</span>
            <BurgerBack burgerOpen={burgerOpen}> <BurgerIcon width='40px' onClick={toggleBurger} burgerOpen={burgerOpen}/> </BurgerBack>
        </HeaderContainer>
    )
}


const BurgerBack = styled.div`
    position: relative;
    background-color: 'red';
    border-radius: 1rem;
    padding: .6rem;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 11;

    padding-left: .75rem;

    background-color: ${props=>props.theme.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`

export default Header;