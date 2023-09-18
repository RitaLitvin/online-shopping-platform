import React from "react";
import {Button} from "../layout/Hero";
import { styled } from "styled-components";
import cardWomenBg from "../img/category-women.jpg";
import cardMenBg from "../img/category-men.jpg";


const CategoriesContainer = styled.div`
    text-align: center;
    margin-top: 110px;
`
const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    margin-bottom: 40px;
`
const CategoriesWomen = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background: url(${cardWomenBg}) center no-repeat;
    width: 570px;
    height: 380px;
    background-size: cover;
    border-radius: 5px;
`
const CategoriesMen = styled(CategoriesWomen)`
    background: url(${cardMenBg}) center no-repeat;
    background-size: cover;
`
// const CategoriesKids = styled.div`
//     grid-area: kids;
// `
const CategoriesTitle = styled.h3`
    font-size: 18px;
    color: white;
    padding-left: 20px;
`
const CategoriesQuantity = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: white;
    padding-left: 20px;
    margin-bottom: 40px;
`

const Categories = ({items}) => {
    const sortedItems = items.reduce ((total, item) => {
       if (!total[item.type]) {
        total[item.type] = 1;
      } else {
        total[item.type] = total[item.type] + 1;
      }
        return total;
    }, {})
    return (
        <CategoriesContainer className="container">
            <h2 className="title">Categories</h2>
            <CardsContainer>
                <CategoriesWomen>
                    <CategoriesTitle>Women</CategoriesTitle>
                    <CategoriesQuantity>({sortedItems.women} products)</CategoriesQuantity>
                </CategoriesWomen>
                <CategoriesMen>
                    <CategoriesTitle>Men</CategoriesTitle>
                    <CategoriesQuantity>({sortedItems.men} products)</CategoriesQuantity>
                </CategoriesMen>
            </CardsContainer>
            <Button>Show more</Button>
        </CategoriesContainer>
    )
}

export default Categories;