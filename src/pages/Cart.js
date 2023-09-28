import React, {useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
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

const Cart = () => {
    const {cart} = useContext(ProductsContext);
    return (
        <CartContainer className='container'>
            <span>Home/Shopping Cart</span>
            <h2 className='title'>Shopping cart</h2>
            {cart.length === 0 ? <EmptyCart /> : <FullCart />}
        </CartContainer>
    )
}

export default Cart;