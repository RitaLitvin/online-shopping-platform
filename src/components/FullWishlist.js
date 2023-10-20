import React, {useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { styled } from 'styled-components';
import FullWishlistProduct from './FullWishlistProduct';

const FullWishlistContainer = styled.div`
    padding: 150px 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 900px) {
        padding: 150px 10px;
    }
`
const FullWishlistProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;
    @media (max-width: 500px) {
        gap: 20px;
    }
`

const FullWishlist = () => {
    const {wishlist} = useContext(ProductsContext);

    return (
        <FullWishlistContainer>
            <FullWishlistProducts>
                {wishlist.map((product) => (
                    <FullWishlistProduct
                        product={product}
                        key={product.id}
                        id={product.id}
                        src = {product.imgFirst}
                        title = {product.title}
                        price = {product.price}
                        count = {product.count}
                    />
                ))}
            </FullWishlistProducts>
        </FullWishlistContainer>
    )
}

export default FullWishlist;
