import React from "react";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
// hover color - #333
const NavList = styled.ul`
    display: flex;
    gap: 60px;
`
const NavLink = styled(Link)`
    color: #fff;
    font-size: 14px;
    transition: 0.2s;
    &:hover {
        color: #336;
    }
    &:active {
    color: red;
  }
`

const Navigation = ({setFilterOption}) => {
    return (
        <nav className="nav">
            <NavList>
                <li className="nav__item">
                    <NavLink to={'/'} onClick = {() => setFilterOption([])}>Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={'/shop'} onClick= {() => setFilterOption ([])}>Shop</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink href="#">Product</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink href="#">Blog</NavLink>
                </li>
            </NavList>
        </nav>
    )
}

export default Navigation;