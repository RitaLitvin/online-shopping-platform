import React, {useRef, useEffect, useState} from "react";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import NavigationList from "./NavigationList";

const Navigation = ({setFilterOption, active}) => {
    const nodeRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.screen.width)

    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    return (
        <nav>
            {windowWidth > 1023 ? <NavigationList setFilterOption={setFilterOption}/> :

            <CSSTransition
                in={active}
                classNames='show'
                timeout={500}
                nodeRef={nodeRef}
                unmountOnExit
            >
                <NavigationList setFilterOption={setFilterOption}/>
            </CSSTransition>}
        </nav>
    )
}

export default Navigation;