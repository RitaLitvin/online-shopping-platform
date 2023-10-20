import React, {useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { styled } from 'styled-components';
import FullCartProduct from './FullCartProduct';

const FullCartContainer = styled.div`
    padding: 150px 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 900px) {
        padding: 150px 10px;
    }
`
const FullCartProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;
    @media (max-width: 500px) {
        gap: 20px;
    }
`
const FullCartProductSum = styled.div`
    background-color: #75c9b7;
    padding: 20px 30px;
    border-radius: 5px;
    text-align: left;
    & span {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 600;
        @media (max-width: 500px) {
            font-size: 15px;
        }
    }
`

const FullCart = () => {
    const {cart, totalSum} = useContext(ProductsContext);

    return (
        <FullCartContainer>
            <FullCartProducts>
                {cart.map((product) => (
                    <FullCartProduct
                        key={product.id}
                        id={product.id}
                        src = {product.imgFirst}
                        title = {product.title}
                        price = {product.price}
                        count = {product.count}
                    />
                ))}
            </FullCartProducts>
            <FullCartProductSum>
                <span>cart totals: {totalSum(cart)}$</span>
            </FullCartProductSum>
        </FullCartContainer>
    )
}

export default FullCart;
