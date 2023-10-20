import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const IconLinks = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 1023px) {
        display: none;
    }
`

const Icons = () => {
    return (
        <IconLinks>
            <Link to = {'/wishlist'}> <FontAwesomeIcon icon={icon({name:"heart", style: 'regular'})} style={{ color: 'white', cursor: 'pointer', height:'19px' }} /></Link>
            <Link to = {"/cart"}><FontAwesomeIcon icon={icon({name:"cart-shopping"})} style={{ color: 'white', cursor: 'pointer', height:'19px' }} /></Link>
        </IconLinks>
    )
}
export default Icons;