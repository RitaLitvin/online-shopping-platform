import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
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
`
const ContainerTop = styled.div`
  background-image: linear-gradient(to right, #9c9, #6cc);
`

const App = () => {

  const [items, setItems] = useState([]);
  const [filterOption, setFilterOption] = useState(0);
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  // const [count, setCount] = useState(1);
  console.log(items)

  const createCount = (id) => {
    console.log(id)
    setItems(
      items.map((product) =>
        product.id == id ? { ...product, count: 1 } : product
      )
    );
    console.log(items)
  }

  const addToCart = (product) => {
    product.count = 1;
    const productInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );
    if (!productInCart) {
      setCart([...cart, product]);
    }
    console.log(cart)
  }
  // const counterInc = (product) => {
  //   setCount({ ...product, count: product.count + 1 });
  // }
  // const counterDec = (product) => {
  //   setCount({...product, count: product.count - 1 });
  // }
// console.log(count)
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
        {(window.location.href == 'http://localhost:3000/') && <Hero />}
        </ContainerTop>
        {/* <Home items={items} /> */}
        {/* <Main items={items}/> */}


        <Routes>
          <Route path = "/" element = {<Home items={items} createCount = {createCount}/>}/>
          <Route path = "/product/:id" element = {<Product items={items} onClickFilterOption = {(id) => setFilterOption(id)} addToCart = {addToCart} inc = {inc} dec = {dec} createCount = {createCount} />}/>
          <Route path = "/shop" element = {<Shop items={items} onClickFilterOption = {(id) => setFilterOption(id)}/>}/>
          {/* <Route path = "/wishlist" element = {<Wishlist/>}/> */}
          <Route path = "/cart" element = {<Cart cart = {cart} inc = {inc}
              dec = {dec} deleteProduct = {deleteProduct} setFilterOption={setFilterOption}/>}/>
          <Route path = "/wishlist" element = {<Wishlist />}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
