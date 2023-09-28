import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {Button} from "../layout/Hero";
import { styled } from "styled-components";
import { ProductsContext } from '../context/ProductsContext';
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
    gap: 20px;
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
    cursor: pointer;
    @media (max-width:800px) {
        height: 200px;
        background-image: linear-gradient(rgba(116,116,116,0.7), rgba(116,116,116,0.7)), url(${cardWomenBg});

    }
`
const CategoriesMen = styled(CategoriesWomen)`
    background: url(${cardMenBg}) center no-repeat;
    background-size: cover;
    @media (max-width:800px) {
        background-image: linear-gradient(rgba(116,116,116,0.7), rgba(116,116,116,0.7)), url(${cardMenBg});
    }
`
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
const CategoriesLink = styled(Link)`
    display: contents;
`

const Categories = () => {
    const {items, setFilterOption} = useContext(ProductsContext);

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
            <CategoriesLink to={'/shop'} onClick = {() => setFilterOption({filteredBy: 'type', value: `${Object.keys(sortedItems)[0]}`})}>
                <CategoriesWomen>
                    <CategoriesTitle>Women</CategoriesTitle>
                    <CategoriesQuantity>({sortedItems.women} products)</CategoriesQuantity>
                </CategoriesWomen>
            </CategoriesLink>
            <CategoriesLink to={'/shop'} onClick = {() => setFilterOption({filteredBy: 'type', value: `${Object.keys(sortedItems)[1]}`})}>
                <CategoriesMen>
                    <CategoriesTitle>Men</CategoriesTitle>
                    <CategoriesQuantity>({sortedItems.men} products)</CategoriesQuantity>
                </CategoriesMen>
            </CategoriesLink>
            </CardsContainer>
            <CategoriesLink to={'/shop'}>
                <Button>Show more</Button>
            </CategoriesLink>
        </CategoriesContainer>
    )
}

export default Categories;