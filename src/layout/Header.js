import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Icons from "../components/Icons";
import { styled } from "styled-components";

const HeaderStyle = styled.header`
    
`
const HeaderContainer = styled.div`
    display: flex;
    padding-top: 35px;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderContainer className="container">
                <Logo />
                <Navigation />
                <Icons />
            </HeaderContainer>
        </HeaderStyle>
    )
}
export default Header;