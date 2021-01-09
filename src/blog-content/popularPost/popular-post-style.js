import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    height: 250px;
    width: 100%;
    border-radius: 10px;
    transition: all .5s ease;

    &:hover {
        transform: scale(1.2);
    }

`;

const PopularPostInfo = styled.div`
    background: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
    padding: .4rem .1rem;
    width: 80%;
    border-radius: 3rem;
    text-align: center;
    font-family: 'Livvic', sans-serif;
    font-weight: 500;

    margin-top: 5px;
    margin-bottom: 10px;
`;

const PopularPostLink = styled.a`
    font-family: 'Anton';
    font-size: 1rem;
    color: #3f4954;

    &:hover {
        text-decoration: none;
        color: #000000;
    }
`;

export {Img, PopularPostInfo, PopularPostLink};