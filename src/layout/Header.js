import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Icons from "../components/Icons";
import { styled } from "styled-components";

const HeaderSection = styled.header`
    height: 460px;
`
const HeaderContainer = styled.div`
    display: flex;
    padding-top: 35px;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {

    return (
        <HeaderSection>
            <HeaderContainer className="container">
                <Logo />
                <Navigation/>
                <Icons />
            </HeaderContainer>
        </HeaderSection>
    )
}
export default Header;