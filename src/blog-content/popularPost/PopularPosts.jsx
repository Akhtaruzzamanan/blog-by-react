import React from 'react'
import PopularPost from './PopularPost'
import postImg6 from '../../images/post6.jpg'
import postImg7 from '../../images/post7.jpg'
import postImg8 from '../../images/post8.jpg'
import postImg9 from '../../images/post9.jpg'
import postImg10 from '../../images/post10.jpg'
import postImg11 from '../../images/post11.jpg'


function PopularPosts() {
    return (
        <div className="py-5 text-center">
            <h2>Popular Post</h2>

            <PopularPost popularPostImg = {postImg6} popularCommentTime = "January 14, 2019 " popularComment = "2 Commets" popularPostLink = "New data recording system to better analyse road accidents"/>

            <PopularPost popularPostImg = {postImg7} popularCommentTime = "January 14, 2019 " popularComment = "2 Commets" popularPostLink = "New data recording system to better analyse road accidents"/>

            <PopularPost popularPostImg = {postImg8} popularCommentTime = "January 14, 2019 " popularComment = "2 Commets" popularPostLink = "New data recording system to better analyse road accidents"/>

            <PopularPost popularPostImg = {postImg9} popularCommentTime = "January 14, 2019 " popularComment = "2 Commets" popularPostLink = "New data recording system to better analyse road accidents"/>

            <PopularPost popularPostImg = {postImg10} popularCommentTime = "January 14, 2019 " popularComment = "2 Commets" popularPostLink = "New data recording system to better analyse road accidents"/>

            <PopularPost popularPostImg = {postImg11} popularCommentTime = "January 14, 2019 " popularComment = "2 Commets" popularPostLink = "New data recording system to better analyse road accidents"/>

        </div>
    )
}

export default PopularPosts
