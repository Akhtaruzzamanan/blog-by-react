import React from 'react'
import "aos/dist/aos.css";
// AOS.init();
import {PostContent, PostInfo, Span, PostTitle, PostLink, Button, Para, Img} from './post-style';


function BlogPost(props) {
    return (
        <PostContent data-aos="zoom-in">

            <div className = "overflow-hidden rounded">
                
                <Img src={props.postImg} alt="post image" className = "img-fluid"/>
                
            </div>
            <PostInfo className = "mx-auto">
                <Span><i class="fas fa-user text-gray"/>&nbsp;&nbsp;Admin</Span>
                <Span><i class="fas fa-calendar-alt text-gray"/>&nbsp;&nbsp; {props.dateOfPost} </Span>
                <Span> {props.comment} </Span>
            </PostInfo>

            <PostTitle>
                
                <PostLink href="#"> {props.postLink} </PostLink>
                <Para> {props.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                illum similique veniam tempore unde?
                </Para>
                <Button >Read More &nbsp; <i class="fas fa-arrow-right"/></Button>
            </PostTitle>

        </PostContent>
    )
}

export default BlogPost
