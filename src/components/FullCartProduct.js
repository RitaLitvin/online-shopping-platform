import React from 'react';
import { styled } from 'styled-components';
import {ProductPieces} from '../pages/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const FullCartProductContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    & img {
        width: 70px;
    }
    & span {
        color: #336;
        font-weight: 600;
        margin-bottom: 0;
        text-transform: capitalize;
        width: 250px;
    }
    & div {
        justify-content: center;
    }
    & div > span {
        flex: 0;
    }
    & span:last-child {
        color: #df645d;
    }
`

const FullCartProduct = ({id, src, title, price, count, inc, dec, deleteProduct}) => {
    return (
        <FullCartProductContainer>
            <FontAwesomeIcon icon={icon({name:"circle-xmark"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => deleteProduct(id)} />
            <img src = {src} alt = {title}></img>
            <span>{title}</span>
            <ProductPieces>
                <FontAwesomeIcon icon={icon({name:"chevron-left"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => dec(id)} />
                <span>{count}</span>
                <FontAwesomeIcon icon={icon({name:"chevron-right"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => inc(id)} />
            </ProductPieces>
            <span>${(price*count).toFixed(2)}</span>
        </FullCartProductContainer>
    )
}

export default FullCartProduct;