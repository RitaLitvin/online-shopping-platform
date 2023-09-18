import React from "react";
import logo from '../img/logo.png';
import { styled } from "styled-components";

const LogoLink = styled.a`
`
const LogoImg = styled.img`
    width: 115px;
    height: 25px;
`

const Logo = () => {
    return (
        <a href="#">
            <LogoImg src={logo} alt="logo"></LogoImg>
        </a>
    )
}

export default Logo;