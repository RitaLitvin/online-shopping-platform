import React from "react";
import { styled } from "styled-components";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import {  faFacebookF, faVimeoV, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const FooterSection = styled.footer`
    background: linear-gradient(to right, #9c9, #6cc);
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
`
const FooterTopLogo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    & span {
        max-width: 170px;
        font-size: 14px;
    }
`
const FooterTopLogoIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const FooterTopSection = styled(FooterTopLogo)`
    gap: 25px;
    & span {
        font-weight: 600;
        color: #ffe26a;
        font-size: 14px;
        letter-spacing: 1px;
    }
    & a {
        color: #336;
        font-size: 14px;
        transition: 0.2s;
        &:hover {
            color: #000;
        }
    }
`

const FooterBottom = styled.div`
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    border-top: solid 1px #a2d3b3;
    & span {
        font-weight: 600;
        font-size: 14px;
    }
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer className="container">
                <FooterTop>
                    <FooterTopLogo>
                        <Logo/>
                        <span>tincidunt ornare massa eget egestas purus</span>
                        <FooterTopLogoIcons>
                            <FontAwesomeIcon icon={faFacebookF} style={{ color: '#ffe26a' , cursor: 'pointer' }} size = 'xl' />
                            <FontAwesomeIcon icon={faVimeoV} style={{ color: '#ffe26a' , cursor: 'pointer' }} size = 'xl' />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffe26a' , cursor: 'pointer'}} size = 'xl' />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffe26a' , cursor: 'pointer'}} size = 'xl' />
                        </FooterTopLogoIcons>
                    </FooterTopLogo>
                    <FooterTopSection>
                        <span>Information</span>
                        <a href = '#'>About Miralou</a>
                        <a href = '#'>FAQ</a>
                        <a href = '#'>Contact Us</a>
                    </FooterTopSection>
                    <FooterTopSection>
                        <span>Quick Links</span>
                        <a href = '#'>Wishlist</a>
                        <a href = '#'>Checkout</a>
                        <Link to = {'/cart'}>Cart</Link>
                    </FooterTopSection>
                    <FooterTopSection>
                        <span>Contact Us</span>
                        <a href = '#'>
                            <FontAwesomeIcon icon={icon({name:"location-dot"})} style={{ color: '#ffe26a', marginRight:'10px' }} size = 'xl' />
                            2517 Ash Dr.San Jose, South Dakota 83475</a>
                        <a href = 'tel:(808)555-0111'>
                            <FontAwesomeIcon icon={icon({name:"phone"})} style={{ color: '#ffe26a', marginRight:'10px' }} size = 'xl' />
                            (808)555-0111</a>
                        <a href = 'mailto:miralou.contacts@example.com'>
                            <FontAwesomeIcon icon={icon({name:"envelope"})} style={{ color: '#ffe26a', marginRight:'10px' }} size = 'xl' />
                            miralou.contacts@example.com</a>
                    </FooterTopSection>
                </FooterTop>
                <FooterBottom>
                    <span>Copyright © 2023 Miralou</span>
                    <span>All rights reserved</span>
                </FooterBottom>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer;