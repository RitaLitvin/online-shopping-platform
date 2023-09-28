import React, {useState} from "react";
import { styled } from "styled-components";
import ProductCard from "../components/Card";
import Filter from "../components/Filter";
import { NavLink } from "react-router-dom";

const ShopContainer = styled.div`
    text-align: center;
    margin-top: -300px;
`
const ShopPath = styled.span`
    color: white;
    margin-bottom: 25px;
    display: block;
    text-align: center;
`
const ShopWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 105px;
`

const ShopSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width:500px) {
        gap: 10px;
    }
`
const ShopCardWrap = styled.div`
    @media (max-width:1000px) {
        width: 40%;
    }

`
const Shop = ({ items, onClickFilterOption }) => {

    return (
        <ShopContainer className="container">
            <ShopPath>Home/Shop</ShopPath>
            <h2 className="title">Shop</h2>
            <ShopWrap>
                <ShopSection>
                    {items.map((item) => (
                        <ShopCardWrap key = {item.id}>
                            <NavLink to={`/product/${item.id}`} >
                                <ProductCard
                                    src = {item.imgFirst}
                                    type = {item.type}
                                    category = {item.category}
                                    title = {item.title}
                                    price = {item.price}
                                />
                            </NavLink>
                        </ShopCardWrap>
                    ))}
                </ShopSection>
                <Filter items = {items}
                    onClickFilterOption={onClickFilterOption} />
            </ShopWrap>
        </ShopContainer>
    )
}

export default Shop;