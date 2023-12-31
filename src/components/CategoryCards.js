import React, { useContext } from "react";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import first_card_bg from "../img/card-first-bg.jpg";
import second_card_bg from "../img/card-second-bg.jpg";
import { ProductsContext } from "../context/ProductsContext";

const CardContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 75px;
    margin-top: -100px;
    left: calc(50% - 570px);
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
}
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
    cursor: pointer;
    @media (max-width: 800px) {
        width: 80%;
        height: 100px;
}
`
const CardNew = styled(CardBestsellers)`
    background: url(${second_card_bg}) center no-repeat;
    background-size: cover;
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
const CardLink = styled(Link)`
    display: contents;
`

const CategoryCards = () => {
    const {setFilterOption} = useContext(ProductsContext)
    return (
        <CardContainer className="container">
            <CardLink to={'/shop'} onClick = {() => setFilterOption({filteredBy: 'isBestseller', value: 'true'})}>
                <CardBestsellers>
                    <CardBestsellersText>Bestsellers</CardBestsellersText>
                </CardBestsellers>
            </CardLink>
            <CardLink to={'/shop'}>
                <CardNew>
                    <CardNewText>New Collection</CardNewText>
                </CardNew>
            </CardLink>
        </CardContainer>
    )
}

export default CategoryCards;