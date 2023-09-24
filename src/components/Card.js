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
`
const CardImg = styled.img`
    width: 270px;
    height: 350px;
    border-radius: 5px;
`
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding-left: 15px;
`
const CardCategory = styled.span`
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
`
const CardName = styled.h3`
    font-size: 16px;
    text-align: left;
    text-transform: capitalize;
    width: 255px;
`
const CardPrice = styled.span`
    font-size: 16px;
    color: #df645d;
`

const ProductCard = ({id, src, type, category, title, price, createCount}) => {
    return (
    <Card onClick={() => createCount(id)}>
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