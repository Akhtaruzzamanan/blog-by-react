import React from 'react'
import styled from 'styled-components'

const PostContent = styled.div`
    width: 100%;
    padding: 1rem 0;
`;

const PostInfo = styled.div`
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    padding: 1rem;
    width: 50%;
    border-radius: 3rem;
    text-align: center;

    margin-top: 10px;
    margin-bottom: 20px;
`;

const Span = styled.span`
    margin: 0 .5rem;
    font-family: 'Abel', cursive;
`;

const PostTitle = styled.div`
    padding: 0;
    position: relative;
`;

const PostLink = styled.a`
    font-family: 'Anton';
    font-size: 1.5rem;
    color: #3f4954;

    &:hover {
        text-decoration: none;
        color: #000000;
    }
`;

const Button = styled.button`
    border-radius: 0;
    padding: .7rem 1.5rem;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

    border: none;
    font-size: 1rem;
    font-family: 'Livvic', sans-serif;
    cursor: pointer;
`;

const Para = styled.p`
    font-family: 'Livvic';
    font-weight: 400;
    color: #636e72;
`;

const Img = styled.img`
    height: 400px;
    width: 100%;
    border-radius: 10px;
    transition: all .8s ease;

    &:hover{
        transform: scale(1.2);
    }
`;

export {PostContent, PostInfo, Span, PostTitle, PostLink, Button, Para, Img};