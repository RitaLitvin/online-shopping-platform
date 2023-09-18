import React, {useState, useEffect} from "react";
import { styled } from "styled-components";

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
`
const FilterOption = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const FilterOptionTitle = styled.span`
    color: #15123d;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
`

const FilterOptionValue = styled.span`
    color: #9896ab;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
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
    // console.log(filterList)
    const sortedItemsByType = filterList.reduce ((total, item) => {
        if (!total[item.type]) {
         total[item.type] = 1;
       } else {
         total[item.type] = total[item.type] + 1;
       }
         return total;
     }, {})

     const sortedItemsByBrands = filterList.reduce ((total, item) => {
        if (!total[item.brand]) {
         total[item.brand] = 1;
       } else {
         total[item.brand] = total[item.brand] + 1;
       }
         return total;
     }, {})

     const sortedItemsByCategory = filterList.reduce ((total, item) => {
        if (!total[item.category]) {
         total[item.category] = 1;
       } else {
         total[item.category] = total[item.category] + 1;
       }
    //    console.log(total)
         return total;
     }, {})
    //  Object.entries(sortedItemsByCategory).map((item, itemId) => console.log(item[1]))
     let category = Object.entries(sortedItemsByCategory)
    //  console.log(category)
    return (
        <FilterContainer>
            <SearchInput></SearchInput>
            <FilterSection>
                <FilterOption>
                    <FilterOptionTitle>Categories</FilterOptionTitle>
                    {Object.entries(sortedItemsByType).map((item, itemId) => {
                        return <FilterOptionValue key = {itemId}
                        onClick = {() => onClickFilterOption({filteredBy: 'type', value: item[0]})}>{item[0]} ({item[1]})</FilterOptionValue>
                    })}
                </FilterOption>
                <FilterOption>
                    <FilterOptionTitle>Brands</FilterOptionTitle>
                    {Object.entries(sortedItemsByBrands).map((item, itemId) => {
                        return <FilterOptionValue key = {itemId}
                        onClick = {() => onClickFilterOption({filteredBy: 'brand', value: item[0]})}>{item[0]} ({item[1]})</FilterOptionValue>
                    })}
                </FilterOption>
                <FilterOption>
                    <FilterOptionTitle>Clothes</FilterOptionTitle>
                        {category.map((item, itemId) => (
                            (<FilterOptionValue
                                key = {itemId}
                                onClick = {() => onClickFilterOption({filteredBy: 'category', value: item[0]})}
                                >{item[0]} ({item[1]})
                            </FilterOptionValue>)
                        ))}
                </FilterOption>
            </FilterSection>
        </FilterContainer>
    )
}

export default Filter;