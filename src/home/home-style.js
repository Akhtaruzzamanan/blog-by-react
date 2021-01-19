// Home Style js
import React from 'react'
import styled from 'styled-components'
import bgImg from '../images/Background-image.png'

const HomeSection = styled.section`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 110vh;
`;

const HomeContent = styled.div`
    padding-top: 12rem;
    text-align: center;
`;

const HeadingThree = styled.h3`
    color: #ffffff;
    margin: .3rem;
    font-size: 1.3rem;
    font-family: 'Abel', sans-serif;
`;

const HeadingOne = styled.h1`
    color: #ffffff;
    margin: .3rem;
    font-size: 2.5rem;
    font-family: 'Bungee Inline', sans-serif;
`;

const HomeBtn = styled.button`
    border: none;
    border-radius: 2rem;
    padding: 1rem 3rem;
    font-family: 'Livvic', sans-serif;
    margin: 1rem;
    font-size: 1rem;
    transition: color 0.3s ease;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

    &:hover {
        background: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;
    }
`;

export {HomeSection, HomeContent, HeadingThree, HeadingOne, HomeBtn};