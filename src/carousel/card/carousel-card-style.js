import React from 'react';
import styled from 'styled-components';
import CardImg1 from '../../images/Food1.jpg'

const Card = styled.div`
    // border: 5px solid #ffffff;
    border-radius: 15px;
    &:hover {box-shadow: 5px 10px 20px 1px rgba(0,0,0,0.253) !important};
`;

const ImgCard = styled.div`
    background-image: url(${props => props.CardImg || CardImg1});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    min-height: 300px;
    transition: 0.5s ease;
`;

const Button = styled.button`
    border: 1px solid #84fab0;
    border-radius: 2rem;
    padding: .7rem 2rem;
    font-family: 'Livvic', sans-serif;
    margin: 1rem;
    font-size: 1rem;
    transition: 0.3s ease;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

    &:hover {
        background: transparent;
        border: 2px solid #ffffff;
        color: #ffffff;
    }
`;

const HeadingThree = styled.h3`
    color: #ffffff;
    margin: .3rem;
    font-size: 1.4rem;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    padding-top: 60px;
`;

const Span = styled.span`
    display: block;
    color: #ffffff;
`;

export {Card, ImgCard, Button, HeadingThree, Span};