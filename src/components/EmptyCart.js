import React from 'react';
import { styled } from 'styled-components';
import { Button } from '../layout/Hero';
import { Link } from 'react-router-dom';
import emptyCart from '../img/empty-cart.png'

const EmptyCartContainer = styled.div`
    padding: 150px 100px;
    border-radius: 5px;
    display: grid;
    grid-template-areas: 'title img' 'text img' 'button img';
    grid-row-gap: 40px;
    align-items: center;
    text-align: left;
    justify-content: space-around;
    grid-template-columns: auto;
    background-color: white;
    background-size: 50%;
    @media (max-width:800px) {
        padding: 50px 20px;
        text-align: center;
        grid-template-areas: 'title' 'text' 'button';
    }
    & h2 {
        grid-area: title;
        display: inline;
        height: fit-content;
        width: fit-content;
    }
    & p {
        grid-area: text;
        max-width: 350px;
    }
    & img {
        grid-area: img;
        width: 150px;
        object-position: 50% 50%;
        @media (max-width:800px) {
            display: none;
        }
    }
    & button{
        grid-area: button;
    }
`

const EmptyCart = ({setFilterOption}) => {
    return(
        <EmptyCartContainer>
            <h2 className='title'>your shopping cart is empty</h2>
            <p>Go back to shop and add some products to your shopping cart via pressing button "Add to cart"</p>
            <img src={emptyCart} alt = 'empty-cart'></img>
            <Link to = {'/shop'} onClick= {() => setFilterOption ([])}><Button>go to shop</Button></Link>
        </EmptyCartContainer>
    )
}

export default EmptyCart;