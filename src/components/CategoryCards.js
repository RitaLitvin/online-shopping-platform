import React from "react";
import { styled } from "styled-components";
import first_card_bg from "../img/card-first-bg.jpg";
import second_card_bg from "../img/card-second-bg.jpg";

const CardContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 75px;
    margin-top: -100px;
    left: calc(50% - 570px);
`
const CardBestsellers = styled.div`
    background: url(${first_card_bg}) center no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    width: 570px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(181,181,181,50%);
`
const CardNew = styled.div`
    background: url(${second_card_bg}) center no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    width: 570px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(181,181,181,50%);
`
const CardBestsellersText = styled.h4`
    color: #336;
    font-size: 14px;
    margin-left: 30px;
    margin-bottom: 30px;
`
const CardNewText = styled.h4`
    color: #336;
    font-size: 14px;
    margin-left: 30px;
    margin-bottom: 30px;
`

const Cards = () => {
    return (
        <CardContainer className="container">
            <CardBestsellers>
                <CardBestsellersText>Bestsellers</CardBestsellersText>
            </CardBestsellers>
            <CardNew>
                <CardNewText>New Collection</CardNewText>
            </CardNew>
        </CardContainer>
    )
}

export default Cards;