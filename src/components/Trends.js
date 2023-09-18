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
    gap: 25px;
    justify-content: flex-start;
`
const Trends = ({items}) => {
    const trendingItems = items.filter((item) => {
        return item.isTrending === "true"
    })
    // console.log(trendingItems)
    return (
        <TrendsContainer>
            <h2 className="title">Trends of a month</h2>
            <TrendsCardWrap className="container">
                {trendingItems.map((item, position) => ((position < 8) &&
                    <div key = {item.id}>
                        <NavLink to={`/items/${item.id}`}>
                            <ProductCard
                                src = {item.imgFirst}
                                type = {item.type}
                                category = {item.category}
                                title = {item.title}
                                price = {item.price}
                                />
                        </NavLink>
                     </div>
                    ))}
            </TrendsCardWrap>
            <Button>Show more</Button>
        </TrendsContainer>

    )
}

export default Trends;