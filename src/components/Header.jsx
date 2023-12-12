import styled from "styled-components";

import Logo from "../assets/Logo"
import BurgerIcon from "../assets/BurgerIcon";

function Header({changeTheme}){

    return(
        <HeaderContainer onClick={changeTheme}>
            <Logo width='45px' />
            <BurgerIcon width='40px'/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1rem;
    margin-bottom: auto;
`

export default Header;