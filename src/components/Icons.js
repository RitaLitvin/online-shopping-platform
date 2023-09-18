import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const IconLinks = styled.div`
    display: flex;
    gap: 30px;
`

const Icons = () => {
    return (
        <IconLinks>
            <FontAwesomeIcon icon={icon({name:"magnifying-glass"})} style={{ color: 'white', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={icon({name:"heart", style: 'regular'})} style={{ color: 'white', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={icon({name:"cart-shopping"})} style={{ color: 'white', cursor: 'pointer' }} />
        </IconLinks>
    )
}

export default Icons;