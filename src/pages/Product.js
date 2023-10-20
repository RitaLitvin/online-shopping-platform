import React, {useEffect, useState, useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from '../layout/Hero';
import Filter from '../components/Filter';
import ProductSkeleton from '../components/ProductSkeleton';


const ProductContainer = styled.div`
    text-align: center;
    margin-top: -290px;
`

const ProductPath = styled.span`
    color: white;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    display: block;
    text-align: center;
`

const ProductWrap = styled.div`
    display: flex;
    margin-top: 95px;
    gap: 20px;
    justify-content: space-between;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center
    }
`
const ProductImages = styled.div`
    display: grid;
    grid-template-areas: 'large large' 'small-first small-second';
    grid-template-columns: 75px;
    grid-row-gap: 5px;
    @media (max-width: 880px) {
        width: 45%;
    }
    @media (max-width: 500px) {
        width: 50%;
    }
`
const ProductLargeImage = styled.img`
    grid-area: large;
    width: 370px;
    background-color: white;
    /* height: 470px; */
    height: 100%;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
    border-radius: 5px;
    @media (max-width: 880px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ProductSmallFirstImage = styled.img`
    grid-area: small-first;
    background-color: white;
    width: 70px;
    height: 80px;
    box-shadow: 0px 0px 15px 5px rgba(150,150,150,20%);
    border-radius: 5px;
`
const ProductSmallSecondImage = styled(ProductSmallFirstImage)`
    grid-area: small-second;
    background-color: white;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 880px) {
        gap:20px;
        }
    @media (max-width: 500px) {
        align-items: center;
    }
`
const ProductInfoName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    @media (max-width: 500px) {
            align-items: center;
        }
    & span:first-child {
        font-size: 14px;
        color: white;
        text-transform: capitalize;
        @media (max-width: 500px) {
            color: #336;
        }
    }
    & span:nth-child(2) {
        font-size: 20px;
        font-weight: 600;
        max-width: 400px;
        text-align: left;
        text-transform: capitalize;
        @media (max-width: 880px) {
            font-size: 18px;
        }
        @media (max-width: 500px) {
            font-size: 16px;
            text-align: center;
        }
    }
    & span:last-child {
        font-size: 20px;
        font-weight: 600;
        color: #df645d;
        @media (max-width: 880px) {
            font-size: 18px;
        }
        @media (max-width: 500px) {
            font-size: 16px;
        }
    }
`
const ProductSizes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 880px) {
        gap: 10px;
        }
    @media (max-width: 500px) {
        justify-content: center;
    }
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
        @media (max-width: 880px) {
            width: 40px;
            height: 40px;
            font-size: 13px;
            line-height: 3;
        }
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
export {ProductPieces};

const ProductColor = styled.span`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    @media (max-width: 880px) {
            font-size: 14px;
        }
`
const ProductWishlist = styled.div`
    display: flex;
    align-items: center;
    & span:first-of-type {
        cursor:pointer;
    }
    & span {
        font-size: 18px;
        font-weight: 600;
        text-transform: capitalize;
        margin-left: 10px;
        @media (max-width: 880px) {
            font-size: 14px;
        }
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
    const { addToCart, addToWishlist } = useContext(ProductsContext);
    const { id } = useParams();
    const [singleItem, setSingleItem] = useState(localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : []);
    const [count, setCount] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.screen.width);
    const [isLoading, setIsLoading] = useState(true);

    const counterInc = (product) => {
        setCount(product.count = product.count + 1 );
    }
    const counterDec = (product) => {
        setCount(product.count == 1 ? product.count : product.count = product.count - 1 );
    }
    const checkCart = (product) => {
        const localCart = JSON.parse(localStorage.getItem('cart'));
        if (localCart !== null) {
            const result = localCart.find((item) => item.id === product.id)
            if (result) {
                product.isInCart = true;
            } else {
                product.isInCart = false;
            }
        }
    }
    useEffect(() => {
        fetch(`https://spring-green-woodpecker-vest.cyclic.app/items/${id}`)
        .then((result) => result.json())
        .then((product) => {
            product.count = count;
            checkCart(product);
            setSingleItem(product);
            localStorage.setItem('item', JSON.stringify(product));
            setIsLoading(false);
        })
    }, [id]);

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(singleItem))
    }, [count]);

    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);

    return(
        <ProductContainer className='container' >
            <ProductPath>Home/Product</ProductPath>
            <h2 className='title'>Product</h2>
            <ProductWrap key={singleItem.id}>
                {isLoading
                ?
                <ProductSkeleton/>
                :
                <ProductImages>
                    <ProductLargeImage src = {singleItem.imgFirst}></ProductLargeImage>
                    <ProductSmallFirstImage src = {singleItem.imgSecond} ></ProductSmallFirstImage>
                    <ProductSmallSecondImage src = {singleItem.imgThird}></ProductSmallSecondImage>
                </ProductImages>}
                <ProductInfo>
                    <ProductInfoName>
                        <span>{singleItem.type}/{singleItem.category}</span>
                        <span>{singleItem.title}</span>
                        <span>${singleItem.price}</span>
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
                        <FontAwesomeIcon icon={icon({name:"chevron-left"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => counterDec(singleItem)} />
                        <span>{singleItem.count}</span>
                        <FontAwesomeIcon icon={icon({name:"chevron-right"})} style={{ color: '#336', cursor: 'pointer', fontSize: '16px' }} onClick={() => counterInc(singleItem)}/>
                    </ProductPieces>
                    <ProductColor>Color: {singleItem.color}</ProductColor>
                    <ProductWishlist onClick={() => addToWishlist(singleItem)}>
                        <FontAwesomeIcon icon={icon({name:"heart", style: 'regular'})} style={{ color: '#336', cursor: 'pointer', fontSize: '20px' }} />
                        <span>add to wishlist</span>
                        <FontAwesomeIcon icon={icon({name:"comments", style: 'regular'})} style={{ color: '#336', cursor: 'pointer', fontSize: '20px', marginLeft: '40px' }} />
                        <span>ask about size</span>
                    </ProductWishlist>
                    <Button onClick={() => addToCart(singleItem)}>{ singleItem.isInCart == true ? 'Already in the cart' : 'Add to the cart' }</Button>
                </ProductInfo>
                { windowWidth >= 990 ? <Filter/> : null}
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