import React from 'react'
import {ListItem} from './category-style';

function CategoryListItem(props) {
    return (
        <>

            <ListItem data-aos = "fade-left" className = "mx-auto">
                <a href="#">{props.typeOfCategory}</a>
                <span>{props.numberOfCategory}</span>
            </ListItem>

        </>
    )
}

export default CategoryListItem
