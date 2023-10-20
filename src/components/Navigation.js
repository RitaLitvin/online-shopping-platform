import React, {useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import useOutsideClick from "../hooks/useOutsideClick";

const Nav = styled.nav`
    position: relative;
`

const NavList = styled.ul`
    display: flex;
    gap: 60px;
    & li:nth-last-child(-n+2) {
        display: none;
    }
    @media (max-width: 1023px) {
        align-items: center;
        flex-direction: column;
        position: fixed;
        gap: 20px;
        right: 0px;
        top: 0;
        padding-top: 100px;
        width: 250px;
        height: 100vh;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #75c9b7;
        z-index: 3;
        transition: transform 0.3s ease-in-out;
        transform: ${({ $isactive }) => ($isactive ? "translateX(0)" : "translateX(800%)")};
        & li:nth-last-child(-n+2) {
        display: inline;
        }
    }
`
const NavLink = styled(Link)`
    color: #fff;
    font-size: 14px;
    transition: 0.2s;
    &:hover {
        color: #336;
    }
`

const HeaderBurger = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    margin-top: -3px;
    cursor: pointer;
    @media (max-width: 1023px) {
       display: flex;
       position: absolute;
       right: 10px;
       top: -5px;
       z-index: 4;
    }
    & span {
        background-color: white;
        width: 25px;
        height: 3px;
        border-radius: 10px;
    }
`

const Navigation = () => {
    const { setFilterOption } = useContext(ProductsContext);
    const { ref, isActive, setIsActive } = useOutsideClick(false);

    return (
        <Nav>
            {isActive && (<NavList $isactive = {isActive ? 1 :0 } ref={ref}>
                <li>
                    <NavLink to={'/'} onClick = {() => setFilterOption([])}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/shop'} onClick= {() => setFilterOption ([])}>Shop</NavLink>
                </li>
                <li>
                    <NavLink href="#">Product</NavLink>
                </li>
                <li>
                    <NavLink href="#">Blog</NavLink>
                </li>
                <li>
                    <NavLink to={'/cart'}>Cart</NavLink>
                </li>
                <li>
                    <NavLink to={'/wishlist'}>Wishlist</NavLink>
                </li>
            </NavList>)}
            <HeaderBurger onClick={() => setIsActive(!isActive)}>
                <span></span>
                <span></span>
                <span></span>
            </HeaderBurger>
        </Nav>
    )
}

export default Navigation;
