import React, {useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";
import logo from '../img/logo.png';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
    width: 115px;
    height: 25px;
`

const Logo = () => {
    const {setFilterOption} = useContext(ProductsContext);
    return (
        <Link to={'/'} onClick = {() => setFilterOption([])}>
            <LogoImg src={logo} alt="logo"></LogoImg>
        </Link>
    )
}

export default Logo;