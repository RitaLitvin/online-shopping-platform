import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
    @media (max-width: 1000px) {
        width: 100%;
        background-color: white;
    }
`
const CardImg = styled.img`
    background-color: white;
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    @media (max-width: 1000px) {
        object-fit: contain;
        height: auto;
    }
`
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 0 0 10px 15px;
    @media (max-width: 1000px) {
        padding: 0 0 10px 5px;

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
    max-width: 250px;
    display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 500px) {
        font-size: 9px;
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