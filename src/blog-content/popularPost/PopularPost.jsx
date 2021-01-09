import React from 'react'
import {Img, PopularPostInfo, PopularPostLink} from './popular-post-style';


function PopularPost(props) {
    return (
        <div className = "pt-5" data-aos="flip-up" data-aos-delay="200">
            <div className="overflow-hidden rounded">
                <Img src={props.popularPostImg} alt="popular post image" className = "img-fluid"/>
            </div>
            <PopularPostInfo className = "mx-auto">
                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp; {props.popularCommentTime}</span>
                <span> {props.popularComment} </span>
            </PopularPostInfo>
            <PopularPostLink href="#"> {props.popularPostLink}</PopularPostLink>
        </div>
    )
}

export default PopularPost
