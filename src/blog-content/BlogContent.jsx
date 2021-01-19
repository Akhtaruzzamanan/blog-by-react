import React from 'react'
import BlogPost from './post/BlogPost';
import Category from './category/Category';

// All Image Here

import post1img from '../images/post1.jpg';
import post2img from '../images/post2.jpg';
import post3img from '../images/post3.jpg';
import post4img from '../images/post4.jpg';
import post5img from '../images/post5.jpg';
import PopularPosts from './popularPost/PopularPosts';

import {ContentSection, Hr, Pagination, Input, Button, Span, PopularTagDiv} from './blog-content-style';

function BlogContent() {
    return (
        <ContentSection>
            <div className="container-fluid px-4">
                <div className="row pt-5">
                    <div className="col-md-8">

                        <BlogPost postImg = {post1img} dateOfPost = "January 14, 2020" comment = "2 Commet" postLink = "Why should boys have all the fun? it's the women who are making india an alcohol-loving contry"/>
                        <Hr/>

                        <BlogPost postImg = {post2img} dateOfPost = "January 22, 2020" comment = "2 Commet" postLink = "Why should boys have all the fun? it's the women who are making india an alcohol-loving contry"/>
                        <Hr/>

                        <BlogPost postImg = {post3img} dateOfPost = "February 17, 2020" comment = "2 Commet" postLink = "Why should boys have all the fun? it's the women who are making india an alcohol-loving contry"/>
                        <Hr/>

                        <BlogPost postImg = {post4img} dateOfPost = "June 07, 2020" comment = "2 Commet" postLink = "Why should boys have all the fun? it's the women who are making india an alcohol-loving contry"/>
                        <Hr/>

                        <BlogPost postImg = {post5img} dateOfPost = "August 14, 2020" comment = "2 Commet" postLink = "Why should boys have all the fun? it's the women who are making india an alcohol-loving contry"/>

                        <div className="py-5 text-center">
                            <Pagination data-aos="zoom-in" >
                                <a href="#"><i className="fas fa-chevron-left"></i></a>
                                <a href="#"><i className="fas fa-angle-double-left"></i></a>
                                <a href="#" >1</a>
                                <a href="#" >2</a>
                                <a href="#" >3</a>
                                <a href="#"><i className="fas fa-angle-double-right"></i></a>
                                <a href="#"><i className="fas fa-chevron-right"></i></a>
                            </Pagination>
                        </div>

                    </div>

                    <div className="col-md-4">

                        <Category/>


                        {/* Popular Post */}
                        <PopularPosts/>

                        {/* News Letter */}

                        <div className="py-5 text-center" data-aos="fade-up" data-aos-delay="200">
                            <h2>Newsletter</h2>
                            <Input type="email" className = "form-control mx-auto" placeholder = "Enter Your Email"/>
                            <Button className = "btn">Subscribe</Button>
                        </div>

                        {/* Popular Tag */}

                        <div className="py-5 text-center mt-5">
                            <h2>Popular Tags</h2>

                            <PopularTagDiv className = "pt-3">
                                <Span data-aos="flip-up" data-aos-delay="100">Software</Span> 
                                <Span data-aos="flip-up" data-aos-delay="150">technology</Span> 
                                <Span data-aos="flip-up" data-aos-delay="200">travel</Span> 
                                <Span data-aos="flip-up" data-aos-delay="250">illustration</Span> 
                                <Span data-aos="flip-up" data-aos-delay="300">design</Span> 
                                <Span data-aos="flip-up" data-aos-delay="350">lifestyle</Span> 
                                <Span data-aos="flip-up" data-aos-delay="400">love</Span> 
                                <Span data-aos="flip-up" data-aos-delay="450">project</Span> 
                            </PopularTagDiv>

                        </div>

                    </div>
                </div>
            </div>
        </ContentSection>
    )
}

export default BlogContent
