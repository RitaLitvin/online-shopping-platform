import React, {useEffect, useRef} from "react";
import {Button} from "../layout/Hero";
import { styled } from "styled-components";
import { register } from 'swiper/element/bundle';
import ProductCard from "./Card";
import { NavLink } from "react-router-dom";


const BestsellersContainer = styled.div`
    text-align: center;
`
// const CardContainer = styled.div`
//     display: flex;
//     gap: 30px;
// `
const BestsellersSubtitle = styled.h3`
    margin-bottom: 40px;
`
const Bestsellers = ({items}) => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
        slidesPerView: 4,
        spaceBetween:30,
        navigation: true,
        pagination: true,
        injectStyles: [
            `
            .swiper-button-prev, .swiper-button-next {
                top: var(--swiper-navigation-top-offset,40%);
            }
            .swiper {
                margin-bottom:40px;
            }
            .swiper-button-prev svg path {
                fill:#336;
            }
            .swiper-button-next svg path {
                fill:#336;
            }
            .swiper-pagination-bullet {
                background-color:#336;
                opacity: 1;
            }
            .swiper-pagination-bullet-active {
                background-color:#ffe36b;
            }
        `,
        ],
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);
    return (
        <BestsellersContainer className="container">
            <h2 className="title">Bestsellers</h2>
            <BestsellersSubtitle className="subtitle">Top products of a month</BestsellersSubtitle>
            <swiper-container init='false' ref={swiperRef}>
                {items.map((item) => (item.isBestseller === "true" &&
                    <swiper-slide key = {item.id}>
                        <NavLink to={`/items/${item.id}`}>
                            <ProductCard
                                src = {item.imgFirst}
                                type = {item.type}
                                category = {item.category}
                                title = {item.title}
                                price = {item.price}
                            />
                        </NavLink>
                    </swiper-slide>
                ))}
            </swiper-container>
            <Button>read more</Button>
        </BestsellersContainer>
    )
}

export default Bestsellers;