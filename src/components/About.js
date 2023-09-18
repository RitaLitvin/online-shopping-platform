import React from "react";
import { styled } from "styled-components";
import AboutImage from "../img/about.jpg"

const AboutSection = styled.div`
    background: linear-gradient(to right, #c6ddcb, #76c9b7);
    padding-bottom: 240px;
`
const AboutContainer = styled.div`
    display: flex;
    gap: 100px;
`
const AboutImg = styled.div`
    margin-top: 50px;
    background: url(${AboutImage}) center 30% ;
    background-size: cover;
    min-width: 570px;
    height: 430px;
    object-fit: contain;
    box-shadow: 0px 0px 15px rgba(150,150,150,90%);
    position: relative;
    border-radius: 5px;
    &::before {
        content: "About Miralou";
        position: absolute;
        text-transform: uppercase;
        font-size: 45px;
        font-weight: 600;
        text-shadow: 0 0 3px;
        opacity: 0.6;
        color: white;
        top: calc(50% - 186px);
        transform: rotate(180deg);
        writing-mode: vertical-rl;
    }
`
const AboutText = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
`
const AboutTitle = styled.h2`
    z-index: 1;
    width: max-content;
    /* flex-flow; */
`
const AboutDescription = styled.p`
    word-spacing: -2.5px;
`

const About = () => {
    return (
        <AboutSection>
            <AboutContainer className="container">
                <AboutImg></AboutImg>
                <AboutText>
                    <AboutTitle className="title">About Miralou</AboutTitle>
                    <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Maecenas pharetra convallis posuere morbi leo urna molestie at. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sed enim ut sem viverra aliquet eget. Consequat ac felis donec et odio. Turpis egestas integer eget aliquet nibh praesent.</AboutDescription>
                </AboutText>
            </AboutContainer>
        </AboutSection>
    )
}

export default About;