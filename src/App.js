import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
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
  const [filterOption, setFilterOption] = useState({});

  // const [itemsFilter, setItemsFilter] = useState([]);

  // const getAllItems = async () => {
  //   try {
  //     const result = await fetch('http://localhost:3001/items');
  //     const data = await result.json();
  //     console.log(data);
  //     setItems(data);
  //     // setItemsFilter(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    fetch(
      `http://localhost:3001/items?${(filterOption) ? `${filterOption.filteredBy}=${encodeURIComponent(filterOption.value)}` : '' }`
      )
    .then((result) => result.json())
    .then((data) => setItems(data))
  }, [filterOption])

  return (
    <div className="App">
    <GlobalStyle/>
        <ContainerTop>
          <Header />
          <Hero />
        </ContainerTop>
        {/* <Home items={items} /> */}
        {/* <Main items={items}/> */}


        <Routes>
          <Route path = "/" element = {<Home items={items}/>}/>
          <Route path = "/items/:id" element = {<Product />}/>
          <Route path = "/shop" element = {<Shop items={items} onClickFilterOption = {(id) => setFilterOption(id)}/>}/>
          {/* <Route path = "/wishlist" element = {<Wishlist/>}/>
          <Route path = "/cart" element = {<Cart/>}/> */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
