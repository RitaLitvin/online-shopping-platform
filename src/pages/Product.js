import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from '../layout/Hero';
import Filter from '../components/Filter';

const ProductContainer = styled.div`
    text-align: center;
    margin-top: -300px;
`

const ProductPath = styled.span`
    color: white;
    margin-bottom: 25px;
    display: block;
    text-align: center;
`

const ProductWrap = styled.div`
    display: flex;
    margin-top: 105px;
    justify-content: space-between;
`
const ProductImages = styled.div`
    display: grid;
    grid-template-areas: 'large large' 'small-first small-second';
    grid-template-columns: 75px;
    grid-row-gap: 5px;
`
const ProductLargeImage = styled.img`
    grid-area: large;
    width: 370px;
    height: 470px;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
    border-radius: 5px;
`
const ProductSmallFirstImage = styled.img`
    grid-area: small-first;
    width: 70px;
    height: 80px;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
    border-radius: 5px;
`
const ProductSmallSecondImage = styled(ProductSmallFirstImage)`
    grid-area: small-second;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`
const ProductInfoName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    & span:first-child {
        font-size: 14px;
        color: white;
        text-transform: capitalize;
    }
    & span:nth-child(2) {
        font-size: 24px;
        font-weight: 600;
        text-transform: capitalize;
    }
    & span:last-child {
        font-size: 24px;
        font-weight: 600;
        color: #df645d;
    }
`
const ProductSizes = styled.div`
    display: flex;
    gap: 20px;
    & span {
        font-size: 18px;
        width: 60px;
        height: 60px;
        font-weight: 600;
        background-color: #d9eeea;
        border-radius: 5px;
        text-align: center;
        line-height: 3.5;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background-color: #75c9b7;
        }
    }
`
const ProductPieces = styled.div`
    font-size: 18px;
    display: flex;
    font-weight: 600;
    gap: 8px;
    align-items: center;
`

const ProductColor = styled.span`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
`
const ProductWishlist = styled.div`
    display: flex;
    align-items: center;
    & span {
        font-size: 18px;
        font-weight: 600;
        text-transform: capitalize;
        margin-left: 10px;
    }
`
const ProductDescription = styled.div`
    background: linear-gradient(to right, #c6ddcc, #76c9b7);
    text-align: left;
    margin-top: 40px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    & h4 {
        font-size: 18px;
        font-weight: 600;
        padding: 15px 30px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    & p {
        background-color: white;
        font-size: 14px;
        padding: 20px 30px;
        letter-spacing: -0.5px;
    }
`


const Product = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/items/${id}`)
        .then((response) => response.json())
        .then((item) => setItem(item));
    }, [id]);

    return(
        <ProductContainer className='container' >
            <ProductPath>Home/Product</ProductPath>
            <h2 className='title'>Product</h2>
            <ProductWrap key={item.title}>
                <ProductImages>
                    <ProductLargeImage src={item.imgFirst}></ProductLargeImage>
                    <ProductSmallFirstImage src={item.imgSecond}></ProductSmallFirstImage>
                    <ProductSmallSecondImage src={item.imgThird}></ProductSmallSecondImage>
                </ProductImages>
                <ProductInfo>
                    <ProductInfoName>
                        <span>{item.type}/{item.category}</span>
                        <span>{item.title}</span>
                        <span>${item.price}</span>
                    </ProductInfoName>
                    <ProductSizes>
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </ProductSizes>
                    <ProductPieces>
                        <FontAwesomeIcon icon={icon({name:"chevron-left"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} />
                        <span>1</span>
                        <FontAwesomeIcon icon={icon({name:"chevron-right"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} />
                    </ProductPieces>
                    <ProductColor>Color: {item.color}</ProductColor>
                    <ProductWishlist>
                        <FontAwesomeIcon icon={icon({name:"heart", style: 'regular'})} style={{ color: '#336', cursor: 'pointer', fontSize: '20px' }} />
                        <span>add to wishlist</span>
                        <FontAwesomeIcon icon={icon({name:"comments", style: 'regular'})} style={{ color: '#336', cursor: 'pointer', fontSize: '20px', marginLeft: '40px' }} />
                        <span>ask about size</span>
                    </ProductWishlist>
                    <Button>Add to the cart</Button>
                </ProductInfo>
                <Filter></Filter>

            </ProductWrap>
            <ProductDescription>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris.
                        Arcu odio ut sem nulla pharetra diam sit amet nisl. Egestas pretium aenean pharetra magna ac placerat vestibulum. Leo duis ut diam quam. Posuere lorem ipsum dolor sit amet. Dignissim sodales ut eu sem integer vitae. Maecenas sed enim ut sem viverra aliquet eget sit amet.</p>
                </ProductDescription>
        </ProductContainer>
    )
}

export default Product;