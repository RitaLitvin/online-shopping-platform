import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Main from '../layout/Main';

const Home = ({items}) => {
    return (
        <Main items={items}/>
    )
}

export default Home;