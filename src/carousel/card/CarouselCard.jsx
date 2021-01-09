import React from 'react'
import {Card, ImgCard, Button, HeadingThree, Span} from './carousel-card-style'
import Img1 from '../../images/Food2.jpg'

function CarouselCard(props) {
    return (
        <Card className = "card text-center my-2">
            <ImgCard CardImg = {props.carouImg}>
                {/* <Img src= {CardImg} alt="people blog" className = "img-fluid"/> */}
                <HeadingThree> {props.heading3} </HeadingThree>
                <Button> {props.btntext} </Button>
                <Span> {props.timeinit}</Span>
            </ImgCard>
        </Card>
    )
}

export default CarouselCard
