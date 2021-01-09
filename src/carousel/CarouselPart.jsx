import {React, useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import styled from 'styled-components';
import ReactCardCarousel from "react-card-carousel";
import CarouselImg from '../images/carousel-bg2.png'
import CarouselCard from './card/CarouselCard';

const CarouselSection = styled.section`
    background-image: url(${CarouselImg});
    background-repeat: no-repeat;
    background-position: right;
`;


function CarouselPart() {

    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <CarouselSection>
            <div className="container-fluid px-4">
                <div className = "row py-5">
                    <div style = {{      
                        position: "relative",
                        height: "70vh",
                        width: "100%",
                        display: "flex",
                    }} className = 'col-md-6 col-sm-12' data-aos = "zoom-in-right">
                        <ReactCardCarousel autoplay={true} autoplay_speed={2000}>
                            <CarouselCard heading3 = "London Fashion week's continued the evolution" btntext = "Fashion" timeinit = "3 minutes" /> 
                            <CarouselCard heading3 = "London Fashion week's continued the evolution" btntext = "Fashion" timeinit = "3 minutes" /> 
                            <CarouselCard heading3 = "London Fashion week's continued the evolution" btntext = "Fashion" timeinit = "3 minutes" /> 
                        </ReactCardCarousel>
                    </div>

                    <div style = {{      
                        position: "relative",
                        height: "70vh",
                        width: "100%",
                        display: "flex",
                    }} className = 'col-md-6 col-sm-12' data-aos = "zoom-in-left">
                        <ReactCardCarousel autoplay={true} autoplay_speed={2000}>
                            <CarouselCard heading3 = "London Fashion week's continued the evolution" btntext = "Fashion" timeinit = "3 minutes" /> 
                            <CarouselCard heading3 = "London Fashion week's continued the evolution" btntext = "Fashion" timeinit = "3 minutes" /> 
                            <CarouselCard heading3 = "London Fashion week's continued the evolution" btntext = "Fashion" timeinit = "3 minutes" /> 
                        </ReactCardCarousel>
                    </div>

                </div>
            </div>
        </CarouselSection>
    )
}

export default CarouselPart
