import React from "react";
import {Button} from "../layout/Hero";
import { styled } from "styled-components";
import ProductCard from "./Card";
import { NavLink } from "react-router-dom";


const TrendsContainer = styled.div `
    text-align: center;
    margin-top: 95px;
    margin-bottom: 50px;
`
const TrendsCardWrap = styled.div`
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`
const TrendsCardContainer = styled.div`
    @media (max-width: 1000px) {
        width: 30%;
    }
`
const Trends = ({items}) => {
    const trendingItems = items.filter((item) => {
        return item.isTrending === "true"
    })

    return (
        <TrendsContainer>
            <h2 className="title">Trends of a month</h2>
            <TrendsCardWrap className="container">
                {trendingItems.map((item, position) => ((position < 8) &&
                    <TrendsCardContainer key = {item.id}>
                        <NavLink to={`/product/${item.id}`}>
                            <ProductCard
                                src = {item.imgFirst}
                                type = {item.type}
                                category = {item.category}
                                title = {item.title}
                                price = {item.price}
                                />
                        </NavLink>
                     </TrendsCardContainer>
                    ))}
            </TrendsCardWrap>
            <Button>Show more</Button>
        </TrendsContainer>

    )
}

export default Trends;