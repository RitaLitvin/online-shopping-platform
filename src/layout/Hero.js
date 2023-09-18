import React from "react";
import { styled } from "styled-components";
import imageBackground from '../img/bg-girl.png'


// const HeroSection = styled.div`
//     /* background: linear-gradient(to bottom right, #9c9, #6cc); */
// `
const Container = styled.div`
    background-image: url(${imageBackground});
    background-position: bottom -45px right -60px;
    background-size: 600px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: 120px;
    padding-bottom: 225px;
`
const HeroTitle = styled.h1`
    text-transform: uppercase;
    font-size: 50px;
    line-height: 1.3;
    letter-spacing: 1px;
    color: white;
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
    transition: 0.5s;
    &:hover{
        box-shadow: 0px 0px 9px 5px rgba(150,150,150,50%);
    }
`
export {Button};

const Hero = () => {
    return(
        <section>
            <Container className="container">
                <HeroTitle>best fashion <br></br> solution for you <br></br> <FirstWord>in</FirstWord> <SecondWord>one</SecondWord> <ThirdWord>website</ThirdWord></HeroTitle>
                <HeroDescription>We will help you to choose the product <br></br> that without the doubt suits you best. <br></br> And we mean it</HeroDescription>
                <Button>read more</Button>
            </Container>
        </section>
    )
}

export default Hero;