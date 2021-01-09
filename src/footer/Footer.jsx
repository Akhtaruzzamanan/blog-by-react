import React from 'react'
import styled from 'styled-components';

import 'antd/dist/antd.css';
import { BackTop } from 'antd';

// All Footer Image Here

import instImg1 from '../images/Food3.jpg'

const FooterSection = styled.section`
    background-color: #0f0f0f;
`;

const HeadingTwo = styled.h2`
    font-family: 'Open Sans', cursive;
    font-weight: 600;
    color: #ffffff;
`;

const Para = styled.p`
    font-family: 'Livvic', cursive;
    font-weight: 400;
    color: #576574;
    font-size: .9rem;
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
`;

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #ffffff;
    margin-bottom: 20px;
`;

const Img = styled.img`
    height: 60px;
    width: 20%;
    margin: 10px;
`;

const FollowLink = styled.a`
    color: #c8d6e5;
    padding: 5px;
    margin: 0 3px;

    &:hover {
        color: #ffffff;
    }
`;

const BackTopBtn = styled(BackTop)`
    span{
        background: linear-gradient(to top, #fee140 0%, #fa709a 100%);
        padding: 15px;
        border-radius: 5px;
        color: #3f4954;
        text-align: center;
        font-size: 1rem;

        &:hover {
            // background: linear-gradient(to top, #8fd3f4 0%, #84fab0 100%);
            color: #000000;
            background: linear-gradient(to top, #fa709a 0%, #fee140 100%);
        }
    }
`;

function Footer() {
    return (
        <FooterSection>
            <div className="container-fluid px-4">
                <div className="row pt-5">

                    <div className="col-md-3">
                        <div className="about-us">
                            <HeadingTwo>About us</HeadingTwo>
                            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis ure, autem nulla tenetur repellendus.</Para>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="newsletter">
                            <HeadingTwo>Newsletter</HeadingTwo>
                            <Para>Stay update with our latest</Para>
                            
                            <Input type="text" className = "form-control" placeholder = "Enter Your Email"/>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="instagram">
                            <HeadingTwo>Instagram</HeadingTwo>
                            <FlexRow className="flex-row">
                                <Img src={instImg1} alt="Instagram" className = "img-fluid"/>
                                <Img src={instImg1} alt="Instagram" className = "img-fluid"/>
                                <Img src={instImg1} alt="Instagram" className = "img-fluid"/>
                                <Img src={instImg1} alt="Instagram" className = "img-fluid"/>
                                <Img src={instImg1} alt="Instagram" className = "img-fluid"/>
                                <Img src={instImg1} alt="Instagram" className = "img-fluid"/>
                            </FlexRow>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="follow">
                            <HeadingTwo>Follow us</HeadingTwo>
                            <Para>Let us be Social</Para>
                            <div>
                                <FollowLink href="#"><i class="fab fa-facebook-f"></i></FollowLink>
                                <FollowLink href="#"><i class="fab fa-twitter"></i></FollowLink>
                                <FollowLink href="#"><i class="fab fa-instagram"></i></FollowLink>
                                <FollowLink href="#"><i class="fab fa-youtube"></i></FollowLink>

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 text-center text-light">
                        <h5>Design & Develop by MD Akhtaruzzaman</h5>
                    </div>

                    <BackTopBtn>
                        <span><i class="fas fa-arrow-up"></i></span>
                    </BackTopBtn>

                </div>
            </div>
        </FooterSection>
    )
}

export default Footer
