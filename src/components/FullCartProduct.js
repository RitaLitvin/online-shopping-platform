import React, {useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { styled } from 'styled-components';
import {ProductPieces} from '../pages/Product'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const FullCartProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    @media (max-width: 500px) {
        display: grid;
        grid-template-areas: 'delete img price' 'delete img title' 'delete img count';
        grid-row-gap: 0px;
        justify-items: start;
        justify-content: start;
    }
    & img {
        width: 70px;
        @media (max-width: 500px) {
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
        @media (max-width: 500px) {
            font-size: 10px;
            flex: 0;
        }
    }
    & div {
        justify-content: center;
        @media (max-width: 500px) {
            grid-area: count;
        }
    }
    & div > span {
        flex: 0;
    }
    & svg{
        @media (max-width: 500px) {
            grid-area: delete;
        }
    }
    & span:nth-child(3) {
        @media (max-width: 500px) {
            grid-area: title;
        }
    }
    & span:last-child {
        color: #df645d;
        text-align: right;
        @media (max-width: 500px) {
            grid-area: price;
        }
    }
`

const FullCartProduct = ({id, src, title, price, count}) => {
    const {inc, dec, deleteProduct} = useContext(ProductsContext);
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <FullCartProductContainer>
            <FontAwesomeIcon icon={icon({name:"circle-xmark"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => deleteProduct(id, currentPath)} />
            <img src = {src} alt = {title}></img>
            <span>{title}</span>
            <ProductPieces>
                <FontAwesomeIcon icon={icon({name:"chevron-left"})} style={{ color: '#336', cursor: 'pointer', fontSize: '12px' }} onClick={() => dec(id)} />
                <span>{count}</span>
                <FontAwesomeIcon icon={icon({name:"chevron-right"})} style={{ color: '#336', cursor: 'pointer', fontSize: '12px' }} onClick={() => inc(id)} />
            </ProductPieces>
            <span>${(price*count).toFixed(2)}</span>
        </FullCartProductContainer>
    )
}

export default FullCartProduct;