import React, {useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";


const FullWishlistProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    @media (max-width: 650px) {
        display: grid;
        grid-template-areas: 'delete img price' 'delete img title' 'delete img button';
        grid-row-gap: 0px;
        grid-column-gap: 15px;
        justify-items: start;
        justify-content: start;
    }
    & img {
        width: 70px;
        @media (max-width: 650px) {
            grid-area: img;
        }
    }
    & span {
        font-weight: 600;
        margin-bottom: 0;
        text-transform: capitalize;
        flex: 1;
        text-align: left;
        @media (max-width: 800px) {
            font-size: 14px;
        }
        @media (max-width: 650px) {
            font-size: 11px;
            flex: 0;
        }
    }
    & svg{
        @media (max-width: 650px) {
            grid-area: delete;
        }
    }
    & span:nth-child(3) {
        @media (max-width: 650px) {
            grid-area: title;
        }
    }
    & span:nth-child(4) {
        color: #df645d;
        text-align: center;
        @media (max-width: 650px) {
            grid-area: price;
        }
    }
`
const FullWishlistProductButton = styled.button`
    cursor: pointer;
    background-color: #76c9b7;
    color: white;
    border-radius: 5px;
    text-transform: capitalize;
    width: 170px;
    padding: 10px 0;
    border: none;
    letter-spacing: 0.5px;
    font-weight: 600;
    transition: color 0.5s;
    @media (max-width: 650px) {
        grid-area: button;
        font-size: 9px;
        width: 110px;
        padding: 5px 0;
    }
    &:hover{
        color: #ffe36b;
    }
`

const FullWishlistProduct = ({product, id, src, title, price}) => {
    const {wishlist, deleteProduct, addToCart} = useContext(ProductsContext);
    const location = useLocation();
    const currentPath = location.pathname;

    const handleAdd = function (product) {
        product.isInCart = true;
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        addToCart(product);
    }

    // const checkCart = (product) => {
    //     const localCart = JSON.parse(localStorage.getItem('cart'));
    //     console.log(product)
    //     if (localCart !== null) {
    //         const result = localCart.find((item) => item.id === product.id)
    //         if (result) {
    //             product.isInCart = true;
    //             // setIsInCart(true);
    //         } else {
    //             product.isInCart = false;
    //             // setIsInCart(false);
    //         }
    //     }
    // }

    return (
        <FullWishlistProductContainer>
            <FontAwesomeIcon icon={icon({name:"circle-xmark"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => deleteProduct(id, currentPath)} />
            <img src = {src} alt = {title}></img>
            <span>{title}</span>
            <span>{price}</span>
            <FullWishlistProductButton onClick={() => handleAdd(product)}>{product.isInCart == true ? 'Already in the cart' : 'Add to the cart'}</FullWishlistProductButton>
        </FullWishlistProductContainer>
    )
}

export default FullWishlistProduct;