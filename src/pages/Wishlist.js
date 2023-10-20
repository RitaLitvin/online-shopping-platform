import React from "react";
import styled from "styled-components";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";
import EmptyWishlist from "../components/EmptyWishlist";
import FullWishlist from "../components/FullWishlist";

const WishlistContainer = styled.div`
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

const Wishlist = () => {
    const {wishlist} = useContext(ProductsContext);

    return (
        <WishlistContainer className='container'>
            <span>Home/Wishlist</span>
            <h2 className='title'>Wishlist</h2>
            {wishlist.length === 0 ? <EmptyWishlist /> : <FullWishlist />}
        </WishlistContainer>
    )
}

export default Wishlist;