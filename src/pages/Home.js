import React from 'react';
// import {Routes, Route, Link} from 'react-router-dom';
import Main from '../layout/Main';

const Home = ({items, createCount}) => {
    return (
        <Main items={items} createCount={createCount}/>
    )
}

export default Home;