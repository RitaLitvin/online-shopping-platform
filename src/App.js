import React from 'react';
import {Routes, Route, HashRouter, useLocation} from 'react-router-dom';
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

  return (
    <div className="App">
    <GlobalStyle/>
        <ContainerTop>
        <Header />
        {currentPath === '/' && <Hero />}
        </ContainerTop>

        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/product/:id" element = {<Product />}/>
          <Route path = "/shop" element = {<Shop />}/>
          {/* <Route path = "/wishlist" element = {<Wishlist/>}/> */}
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/wishlist" element = {<Wishlist />}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
