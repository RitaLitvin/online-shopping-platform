import React, {useState} from "react";
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
    position: relative;
`
const HeaderBurger = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    margin-top: -3px;
    cursor: pointer;
    @media (max-width: 1023px) {
       display: flex;
       z-index: 4;
    }
    & span {
        background-color: white;
        width: 25px;
        height: 3px;
        border-radius: 10px;
    }
`
const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <HeaderSection>
            <HeaderContainer className="container">
                <Logo />
                <Navigation active = {active}/>
                <Icons />
                <HeaderBurger onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </HeaderBurger>
            </HeaderContainer>
        </HeaderSection>
    )
}
export default Header;