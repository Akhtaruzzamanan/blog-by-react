import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.section`
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
`;

const Hr = styled.hr`
    border-bottom: 2px solid #3f4954;
`;

const Pagination = styled.div`
    justify-content: center;

    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;

    a {
        padding: .6rem 1rem;
        border-radius: 2rem;
        margin: 0 .3rem;
        font-family: "Lexend", sans-serif;

        background: linear-gradient(to top, #84fab0 0%, #8fd3f4 100%);
        color: #3f4954;

        &:hover {
            text-decoration: none;
            background: linear-gradient(to top, #8fd3f4 0%, #84fab0 100%);
            color: #000000;
        }
    }
`;

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #ffffff;
    width: 80%;
`;

const Button = styled.button`
    background: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
    padding: .4rem .1rem;
    width: 80%;
    border-radius: 3rem;
    text-align: center;
    font-family: 'Livvic', sans-serif;
    font-weight: 500;

    margin-top: 8px;
`;

const Span = styled.span`
    background: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
    padding: .4rem 1rem;
    border-radius: 3rem;
    margin: .4rem .6rem;
    cursor: pointer;
    font-family: 'Livvic', sans-serif;
    font-weight: 500;
`;

const PopularTagDiv = styled.div`
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
`;

export {ContentSection, Hr, Pagination, Input, Button, Span, PopularTagDiv};