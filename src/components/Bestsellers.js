import React, {useEffect, useRef, useContext} from "react";
import { ProductsContext } from '../context/ProductsContext';
import {Button} from "../layout/Hero";
import { styled } from "styled-components";
import { register } from 'swiper/element/bundle';
import ProductCard from "./Card";
import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";

const BestsellersContainer = styled.div`
    text-align: center;
`
const BestsellersSubtitle = styled.h3`
    margin-bottom: 40px;
`
const Bestsellers = () => {
    const {items, setFilterOption, isLoading} = useContext(ProductsContext);

    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
        // slidesPerView: 4,
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
            @media(max-width:800px) {
                .swiper {
                    width:70%;
                }
                :host {
                    --swiper-navigation-size: 30px;
                }
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
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
          }
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, [items]);
    return (
        <BestsellersContainer className="container">
            <h2 className="title">Bestsellers</h2>
            <BestsellersSubtitle className="subtitle">Top products of a month</BestsellersSubtitle>
            <swiper-container init='false' ref={swiperRef}>
                {isLoading
                ? [...new Array(4)].map((_, index) => <swiper-slide key = {index}><CardSkeleton/></swiper-slide>)
                : items.map((item) => (item.isBestseller === "true" &&
                    <swiper-slide key = {item.id}>
                        <Link to={`/product/${item.id}`}>
                            <ProductCard
                                src = {item.imgFirst}
                                type = {item.type}
                                category = {item.category}
                                title = {item.title}
                                price = {item.price}
                            />
                        </Link>
                    </swiper-slide>
                ))}
            </swiper-container>
            <Link to={'/shop'} onClick={() => setFilterOption({filteredBy: 'isBestseller', value: 'true'})}>
                <Button>show more</Button>
            </Link>
        </BestsellersContainer>
    )
}

export default Bestsellers;