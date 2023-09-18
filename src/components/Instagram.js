import React from "react";
import { styled } from "styled-components";
import firstImage from "../img/first-instagram-img.jpg";
import secondImage from "../img/second-instagram-img.jpg";
import thirdImage from "../img/third-instagram-img.jpg";
import fourthImage from "../img/fourth-instagram-img.jpg";
import fifthImage from "../img/fifth-instagram-img.jpg";
import sixthImage from "../img/sixth-instagram-img.jpg";


const InstagramSection = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const InstagramContainer = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    gap: 30px;
`
const InstagramImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
        &:nth-child(2) {
            object-position: 25%;
        }
        &:nth-child(3) {
            object-position: 0 20%;
        }
        &:nth-child(6) {
            object-position: top;
        }
`

const InstagramCover = styled.div`
    background-color: #0e0e0e7a;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 0;
`
const InstagramBlock = styled.div`
    margin: 80px auto;
    color: white;
    background-color: #76c9b7;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    line-height: 2.5;
    box-shadow: 0 0 10px 5px #0e0e0e33;
    cursor:pointer;
`

const Instagram = () => {
    return (
        <InstagramSection>
            <InstagramContainer className="container">
                <InstagramImage src = {firstImage} alt="first-instagram-img"></InstagramImage>
                <InstagramImage src = {secondImage} alt = "second-instagram-img"></InstagramImage>
                <InstagramImage src = {thirdImage} alt="third-instagram-img"></InstagramImage>
                <InstagramImage src = {fourthImage} alt="forth-instagram-img"></InstagramImage>
                <InstagramImage src = {fifthImage} alt="fifth-instagram-img"></InstagramImage>
                <InstagramImage src = {sixthImage} alt="sixth-instagram-img"></InstagramImage>
            </InstagramContainer>
            <InstagramCover>
                <InstagramBlock>@miralou
                </InstagramBlock>
            </InstagramCover>
        </InstagramSection>
    )
}

export default Instagram;