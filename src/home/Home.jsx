import React from 'react'
import {HomeSection, HomeContent, HeadingThree, HeadingOne, HomeBtn} from './home-style'

function Home() {
    return (
        <HomeSection>
            <div className="container-fluid px-4">
                <HomeContent className = "text-center ">
                    <HeadingThree>Tours & Travels</HeadingThree>
                    <HeadingOne>Amazing Place on Earth</HeadingOne>
                    <HomeBtn>
                        Explore
                    </HomeBtn>
                </HomeContent>
            </div>
        </HomeSection>
    )
}

export default Home
