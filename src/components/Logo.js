import React from "react";
import logo from '../img/logo.png';
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const LogoImg = styled.img`
    width: 115px;
    height: 25px;
`

const Logo = ({setFilterOption}) => {
    return (
        <NavLink to={'/'} onClick = {() => setFilterOption([])}>
            <LogoImg src={logo} alt="logo"></LogoImg>
        </NavLink>
    )
}

export default Logo;