import React from "react";
import Cards from "../components/CategoryCards";
import Bestsellers from "../components/Bestsellers";
import Categories from "../components/Categories";
// import { styled } from "styled-components";
import Trends from "../components/Trends";
import About from "../components/About";
import Clients from "../components/Clients";
import Instagram from "../components/Instagram";



const Main = ({items}) => {
    // console.log(items)
    return (
        <main>
            <Cards/>
            <Bestsellers items={items}/>
            <Categories items={items}/>
            <Trends items={items}/>
            <About/>
            <Clients/>
            <Instagram/>
        </main>
    )
}

export default Main;