import React, {useRef, useEffect, useState} from "react";
import { styled } from "styled-components";
import { register } from 'swiper/element/bundle';
import ReviewCard from "./ReviewCard";

const ClientsContainer = styled.div`
    text-align: center;
    margin-top: -190px;
`
const ClientsTitle = styled.h2`
    /* &::before{
    }
    @media (max-width: 600px) {
        content: none;
    } */
`
const url = 'https://trustpilot4.p.rapidapi.com/?domain=www.asos.com&page=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e904862a7mshabdcd035abccedbp173ce8jsnd732da0eee5c',
		'X-RapidAPI-Host': 'trustpilot4.p.rapidapi.com'
	}
};

const Clients = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(url, options)
        .then((response) => response.json())
        .then((json) => (json.reviews).filter((review) => {
           let newText = (review.text).replace(/asos/ig, 'Miralou');
           review.text = newText;
           return review.rating === 5 && review.text.length <= 190
        }))
        .then((review) => setReviews(review));
    }, []);

    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
        navigation: true,
        pagination: true,
        injectStyles: [
            `
            .swiper-wrapper{
                margin-top: 40px;
            }
            :host {
                --swiper-navigation-size: 30px;
            }
            .swiper-button-prev, .swiper-button-next {
                top: var(--swiper-navigation-top-offset,50%);
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
            .swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal {
                bottom: var(--swiper-pagination-bottom,-5px);
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
            720: {
                slidesPerView: 2,
            },
            1050: {
                slidesPerView: 3,
            }
          }
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return (
        <ClientsContainer className="container clients">
            <ClientsTitle className="title">our clients that love to work with us</ClientsTitle>
            <swiper-container init='false' ref={swiperRef}>
                {reviews.map((review) => (
                    <swiper-slide key = {review.id}>
                        <ReviewCard
                            name = {review.consumer.displayName}
                            text = {review.text}
                        />
                    </swiper-slide>))
                }
            </swiper-container>
        </ClientsContainer>
    )
}

export default Clients