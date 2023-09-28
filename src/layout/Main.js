import React from "react";
import CategoryCards from "../components/CategoryCards";
import Bestsellers from "../components/Bestsellers";
import Categories from "../components/Categories";
import Trends from "../components/Trends";
import About from "../components/About";
import Clients from "../components/Clients";
import Instagram from "../components/Instagram";



const Main = () => {
    return (
        <main>
            <CategoryCards />
            <Bestsellers />
            <Categories />
            <Trends />
            <About/>
            <Clients/>
            <Instagram/>
        </main>
    )
}

export default Main;