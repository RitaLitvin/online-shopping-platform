import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import EmptyCart from '../components/EmptyCart'
import FullCart from '../components/FullCart';

const CartContainer = styled.div`
    margin-top: -250px;
    text-align: center;
    & > span {
        color: white;
        display: block;
        margin-bottom: 25px;
    }
    & > h2 {
        margin-bottom: 50px;
    }
`

const Cart = ({cart, inc, dec, deleteProduct, setFilterOption}) => {
    console.log(cart)
    return (
        <CartContainer className='container'>
            <span>Home/Shopping Cart</span>
            <h2 className='title'>Shopping cart</h2>
            {cart.length == 0 ? <EmptyCart setFilterOption = {setFilterOption}/> : <FullCart cart = {cart} inc = {inc}
              dec = {dec} deleteProduct = {deleteProduct}/>}
        </CartContainer>
    )
}

export default Cart;