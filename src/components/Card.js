import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 30px;
    cursor: pointer;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
    @media (max-width: 1000px) {
        width: 100%;
        margin-bottom: 30px;
        background-color: white;
        border-radius: 5px;
    }
`
const CardImg = styled.img`
    width: 270px;
    height: 350px;
    border-radius: 5px;
    object-fit: cover;
    @media (max-width: 1000px) {
        width: 100%;
        object-fit: contain;
        height: auto;
    }
`
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding-left: 15px;
    @media (max-width: 1000px) {
        padding: 0 5px;
    }
`
const CardCategory = styled.span`
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
    @media (max-width: 500px) {
        font-size: 8px;
        text-align: left;
        letter-spacing: -0.5px;
    }
`
const CardName = styled.h3`
    font-size: 16px;
    text-align: left;
    text-transform: capitalize;
    width: 255px;
    @media (max-width: 1000px) {
        width: 100%;
        font-size: 14px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`
const CardPrice = styled.span`
    font-size: 16px;
    color: #df645d;
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 500px) {
        font-size: 12px;
    }
`

const ProductCard = ({src, type, category, title, price}) => {
    return (
    <Card>
        <CardImg src = {src} onError={(e) => e.target.src = `https://placehold.co/270x350/76c9b7/white?text=Image+not+found`} alt = {title}></CardImg>
        <CardText>
            <CardCategory>{type}/{category}</CardCategory>
            <CardName>{title}</CardName>
            <CardPrice>${price}</CardPrice>
        </CardText>
    </Card>
    )
}

export default ProductCard;