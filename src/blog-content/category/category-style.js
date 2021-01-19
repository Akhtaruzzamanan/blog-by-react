import React from 'react';
import styled from 'styled-components';

const CategoryList = styled.ul`
    font-family: 'Livvic';
    font-weight: 500;
    // margin: 0 auto;
`;

const ListItem = styled.li`
    background: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
    padding: .4rem 1rem;
    margin: .8rem 0;
    border-radius: 3rem;
    list-style: none;
    width: 70%;

    display: flex;
    justify-content: space-between;

    a {
        color: #000000;
        text-decoration: none;
    }

`;

export {CategoryList, ListItem};