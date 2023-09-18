import React from "react";
import { styled } from "styled-components";
import Avatar from "boring-avatars";


const CardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 0px 10px 6px rgba(150,150,150,20%);
    border-radius: 5px;
    height: 180px;
    padding: 15px;
    margin: 15px;
`
// const ClientImage = styled.img`
//     border-radius: 50%;
//     width: 50px;
// `
const ClientName = styled.p`
    font-weight: 600;
    text-transform: capitalize;
`
const ClientReview = styled.p`
    font-size: 14px;
    line-height: 1.3;
`


const ReviewCard = ({name, text}) => {
    return(
        <CardContainer>
            <Avatar
                size={40}
                name={name}
                variant="marble"
                colors={["##A7CD2C", "#BADA5F", "#CEE891", "#E1F5C4", "#50C8C6"]}
            />
            <ClientName>{name}</ClientName>
            <ClientReview>{text}</ClientReview>
        </CardContainer>
    )
}

export default ReviewCard;