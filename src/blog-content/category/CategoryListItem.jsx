import React from 'react'
import {ListItem} from './category-style';

function CategoryListItem(props) {
    return (
        <>

            <ListItem data-aos = "fade-up" className = "mx-auto">
                <a href="#">{props.typeOfCategory}</a>
                <span className = "">{props.numberOfCategory}</span>
            </ListItem>

        </>
    )
}

export default CategoryListItem
