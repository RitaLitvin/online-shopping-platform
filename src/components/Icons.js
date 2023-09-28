import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const IconLinks = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 1023px) {
        flex: 1;
        justify-content: flex-end;
        margin-right: 30px;
        z-index: 4;
    }
`

const Icons = () => {
    return (
        <IconLinks>
            {/* <FontAwesomeIcon icon={icon({name:"magnifying-glass"})} style={{ color: 'white', cursor: 'pointer', marginTop: '4px' }} /> */}
            <Link to = {'/wishlist'}> <FontAwesomeIcon icon={icon({name:"heart", style: 'regular'})} style={{ color: 'white', cursor: 'pointer', height:'19px' }} /></Link>
            <Link to = {"/cart"}><FontAwesomeIcon icon={icon({name:"cart-shopping"})} style={{ color: 'white', cursor: 'pointer', height:'19px' }} /></Link>
        </IconLinks>
    )
}
export default Icons;