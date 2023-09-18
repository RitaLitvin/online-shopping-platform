import React from "react";
import { styled } from "styled-components";

const ProductImage = styled.div`
    display: grid;
    grid-template-areas: 'large large' 'small-first small-second';
`
const ProductLargeImage = styled.img`
    grid-area: large;
`
const ProductSmallFirstImage = styled.img`
    grid-area: small-first;
`
const ProductSmallSecondImage = styled.img`
    grid-area: small-second;
`
const ProductImages = ({imgFirst, imgSecond, key}) => {
    // console.log(img)
    return (
        <ProductImage>
            {/* {img.map((link) => (
                <ProductLargeImage key={key} src={link[1]} ></ProductLargeImage>
            ))} */}
            <ProductLargeImage ></ProductLargeImage>
        </ProductImage>
    )
}

export default ProductImages