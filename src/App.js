import React, { useEffect, useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { styled, createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Prompt';
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  h1, h2, h3, h4, p, span {
    color: #336;
  }
  .container {
    max-width: 1170px;
    /* padding: 0 30px; */
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    font-size: 28px;
    display: inline-block;
    position: relative;
    text-transform: capitalize;
    z-index: 2;
  }
  .title::before {
    content: '';
    position: absolute;
    background-color: #ffe36b;
    top: 50%;
    z-index: -1;
    width: 100%;
    height: 5px;
  }
  .subtitle {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .show-enter {
    opacity: 0;
  }
  .show-enter-active {
    opacity: 1;
    transition: opacity 0.5s;
  }
  .show-exit {
    opacity: 1;
  }
  .show-exit-active {
    opacity: 0;
    transition: opacity 0.5s;
  }
  @media (max-width:600px) {
    .title::before {
      content: none;
    }
  }
`
const ContainerTop = styled.div`
  background-image: linear-gradient(to right, #9c9, #6cc);
`

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [items, setItems] = useState([]);
  const [filterOption, setFilterOption] = useState(0);
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

  console.log(filterOption)

  const addToCart = (product) => {
    let productInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );
    if (!productInCart) {
      setCart([...cart, product]);
      console.log(cart)

    } else {
      console.log(productInCart)
      console.log(product)
    setCart(
      cart.map((item) =>
      item.id == product.id ? item = product : item))
    };
  }

  const dec = (id) => {
    const productInCart = cart.find((productInCart) => productInCart.id === id);
    if (productInCart.count > 1) {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...product, count: product.count - 1 } : product
        )
      );
    } else {
      setCart(cart.filter((productInCart) => productInCart.id !== id));
    }
  }

    const inc = (id) => {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...product, count: product.count + 1 } : product
        )
      );
    };

    const deleteProduct = (id) => {
      const updatedCart = cart.filter((product) => product.id !== id)
      setCart(updatedCart)
    }

    const totalSum = (cart) => {
      const totalSum = cart.reduce((sum, item) => {
        return sum + item.count*Number(item.price)
      }, 0)
      return totalSum.toFixed(2);
    }

  useEffect(() => {
    fetch(`http://localhost:3001/items?${(filterOption !== 0 && filterOption.length !== 0) ? `${filterOption.filteredBy}=${encodeURIComponent(filterOption.value)}` : '' }`)
    .then((result) => result.json())
    .then((data) => setItems(data))
  }, [filterOption])

  useEffect (() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <div className="App">
    <GlobalStyle/>
        <ContainerTop>
        <Header setFilterOption = {setFilterOption}/>
        {currentPath === '/' && <Hero />}
        </ContainerTop>

        <Routes>
          <Route path = "/" element = {<Home items={items} onClickFilterOption = {(id) => setFilterOption(id)}/>}/>
          <Route path = "/product/:id" element = {<Product items={items} onClickFilterOption = {(id) => setFilterOption(id)} addToCart = {addToCart} inc = {inc} dec = {dec}/>}/>
          <Route path = "/shop" element = {<Shop items={items} onClickFilterOption = {(id) => setFilterOption(id)}/>}/>
          {/* <Route path = "/wishlist" element = {<Wishlist/>}/> */}
          <Route path = "/cart" element = {<Cart cart = {cart} inc = {inc} dec = {dec} deleteProduct = {deleteProduct} setFilterOption={setFilterOption} totalSum = {totalSum}/>}/>
          <Route path = "/wishlist" element = {<Wishlist />}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
