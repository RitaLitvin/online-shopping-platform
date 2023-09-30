import React, {useRef, useEffect, useState, useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import NavigationList from "./NavigationList";

const Navigation = ({active}) => {

    const nodeRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.screen.width)

    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    return (
        <nav>
            {windowWidth > 1023 && active == false ? <NavigationList /> :

            <CSSTransition
                nodeRef={nodeRef}
                in={active}
                classNames='show'
                timeout={100}
                mountOnEnter
                unmountOnExit
            >
                <div ref={nodeRef}>
                    <NavigationList/>
                </div>
            </CSSTransition>}
        </nav>
    )
}

export default Navigation;