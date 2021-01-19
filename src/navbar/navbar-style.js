import styled from 'styled-components'
import {Navbar } from 'reactstrap'

const CustomNavbar = styled(Navbar)`
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: ${props => props.scrolled ? '5px 0' : '15px 0'}; // when page scrolled, navbar padding on 5px
    background-color: ${props => props.scrolled ? '#535c68' : 'none'}; // when page scrolled, navbar background-color is crimson
    transition: all 0.3s ease;
    opacity: 0.8;
`;

// Navbar brand design
const Logo = styled.span`
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    transition: color 0.3s ease;

    &:hover {color: ${props => props.scrolled ? 'aqua' : 'greenyellow'}}; // when page scrolled, navbar text-color is aqua
`;

// Navbar Link Desingn
const NavMenu = styled.span`
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.3s ease;
    font-family: 'Roboto Condensed', sans-serif;

    &:hover {color: ${props => props.scrolled ? 'aqua' : 'greenyellow'}}; // when page scrolled, navbar text-color is aqua
`;

export {CustomNavbar, Logo, NavMenu}