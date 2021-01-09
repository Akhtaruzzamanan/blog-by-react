import React from 'react'
import {CategoryList} from './category-style';
import CategoryListItem from './CategoryListItem';

function Category() {
    return (
        <div className="py-2 text-center">
            <h2>Category</h2>

            <CategoryList className = "text-center">
                <CategoryListItem typeOfCategory = "Software" numberOfCategory = "(05)"/>
                <CategoryListItem typeOfCategory = "Techonlogy" numberOfCategory = "(02)"/>
                <CategoryListItem typeOfCategory = "Lifestyle" numberOfCategory = "(07)"/>
                <CategoryListItem typeOfCategory = "Shopping" numberOfCategory = "(01)"/>
                <CategoryListItem typeOfCategory = "Food" numberOfCategory = "(11)"/>
            </CategoryList>

        </div>
    )
}

export default Category
