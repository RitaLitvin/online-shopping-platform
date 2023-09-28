import React from "react";
import { styled } from "styled-components";
import imageBackground from '../img/bg-girl.png'

const HeroContainer = styled.div`
    background-image: url(${imageBackground});
    background-position: bottom -45px right -60px;
    background-size: 600px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: -250px;
    padding-bottom: 225px;
    @media (max-width: 900px) {
        background-image: none;
}
`
const HeroTitle = styled.h1`
    text-transform: uppercase;
    font-size: 50px;
    line-height: 1.3;
    letter-spacing: 1px;
    color: white;
    @media (max-width: 600px) {
        font-size: 35px;
}
    @media (max-width: 400px) {
        font-size: 25px;
}
`
const FirstWord = styled.span`
    color: #ccc;
`
const SecondWord = styled.span`
    color: #ffe36b;
`
const ThirdWord = styled.span`
    color: #df645d;
`
const HeroDescription = styled.h3`
    font-size: 18px;
    color: #336;
    font-weight: 400;
    letter-spacing: -0.8px;
    @media (max-width: 600px) {
        font-size: 14px;
}
`
const Button = styled.button`
    cursor: pointer;
    background-color: #76c9b7;
    color: white;
    border-radius: 5px;
    text-transform: capitalize;
    width: 170px;
    padding: 10px 0;
    border: none;
    letter-spacing: 0.5px;
    font-weight: 600;
    transition: color 0.5s;
    &:hover{
        color: #ffe36b;
    }
`
export {Button};

const Hero = () => {
    return(
        <section>
            <HeroContainer className="container">
                <HeroTitle>best fashion <br></br> solution for you <br></br> <FirstWord>in</FirstWord> <SecondWord>one</SecondWord> <ThirdWord>website</ThirdWord></HeroTitle>
                <HeroDescription>We will help you to choose the product <br></br> that without the doubt suits you best. <br></br> And we mean it</HeroDescription>
                <Button>read more</Button>
            </HeroContainer>
        </section>
    )
}

export default Hero;