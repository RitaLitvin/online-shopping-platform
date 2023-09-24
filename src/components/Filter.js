import React, {useState, useEffect} from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const SearchInput = styled.input`
    border-radius: 5px;
    outline: none;
    border: 0px;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
`
const FilterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0 0 20px;
    gap: 60px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
`
const FilterOption = styled.div`
    text-align: left;
    width: 100%;
    &:first-of-type :nth-child(2){
        height: min-content;
    }
`
const FilterOptionList = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 110px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #d9eeea;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #75c9b7;
        border-radius: 5px;
    }
`

const FilterOptionTitle = styled.span`
    color: #15123d;
    text-align: left;
    font-size: 16px;
    font-weight: 600;

`

const FilterOptionValue = styled.span`
    color: #9896ab;
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        color:#8fd3c4;
    }
`

const Filter = ({onClickFilterOption}) => {
    const [filterList, setFilterList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/items`)
        .then((result) => result.json())
        .then((data) => setFilterList(data))
      }, [])

    const filter = function (filteredBy) {
        filterList.reduce ((total, item) => {
            if (!total[item.filteredBy]) {
            total[item.filteredBy] = 1;
            } else {
            total[item.filteredBy] = total[item.filteredBy] + 1;
            }
            total.sortedBy = 'category';
            return total;
        })
    }
    const sortedItemsByType = Object.entries(filterList.reduce ((total, item) => {
        if (!total[item.type]) {
         total[item.type] = 1;
       } else {
         total[item.type] = total[item.type] + 1;
       }
         return total;
     }, {}))

     const sortedItemsByBrands = Object.entries(filterList.reduce ((total, item) => {
        if (!total[item.brand]) {
         total[item.brand] = 1;
       } else {
         total[item.brand] = total[item.brand] + 1;
       }
         return total;
     }, {}))

     const sortedItemsByCategory = Object.entries(filterList.reduce ((total, item) => {
        if (!total[item.category]) {
         total[item.category] = 1;
       } else {
         total[item.category] = total[item.category] + 1;
       }
         return total;
     }, {}))
    return (
        <FilterContainer>
            <SearchInput></SearchInput>
            <FilterSection>
                <FilterOption>
                    <FilterOptionTitle>Categories</FilterOptionTitle>
                    <FilterOptionList>
                        {sortedItemsByType.map((item, itemId) => (
                            <Link to={'/shop'} key = {itemId}>
                                <FilterOptionValue
                                onClick = {() => onClickFilterOption({filteredBy: 'type', value: item[0]})}>{item[0]} ({item[1]})</FilterOptionValue>
                            </Link>
                        ))}
                    </FilterOptionList>
                </FilterOption>
                <FilterOption>
                    <FilterOptionTitle>Brands</FilterOptionTitle>
                    <FilterOptionList>
                        {sortedItemsByBrands.map((item, itemId) => (
                            <Link to={'/shop'} key = {itemId}>
                                <FilterOptionValue
                                onClick = {() => onClickFilterOption({filteredBy: 'brand', value: item[0]})}>{item[0]} ({item[1]})</FilterOptionValue>
                            </Link>
                        ))}
                    </FilterOptionList>
                </FilterOption>
                <FilterOption>
                    <FilterOptionTitle>Clothes</FilterOptionTitle>
                    <FilterOptionList>
                        {sortedItemsByCategory.map((item, itemId) => (
                            <Link to={'/shop'} key = {itemId}>
                                <FilterOptionValue
                                    onClick = {() => onClickFilterOption({filteredBy: 'category', value: item[0]})}
                                    >{item[0]} ({item[1]})
                                </FilterOptionValue>
                            </Link>
                        ))}
                    </FilterOptionList>
                </FilterOption>
            </FilterSection>
        </FilterContainer>
    )
}

export default Filter;