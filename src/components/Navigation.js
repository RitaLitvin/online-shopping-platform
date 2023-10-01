import React, {useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';


const NavList = styled.ul`
    display: flex;
    gap: 60px;
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
        transform: ${({ active }) => (active ? "translateX(0)" :"translateX(100%)")};
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

const Navigation = ({active}) => {
    const { setFilterOption } = useContext(ProductsContext);

    return (
        <nav>
            <NavList active={active}>
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
            </NavList>
        </nav>
    )
}

export default Navigation;
