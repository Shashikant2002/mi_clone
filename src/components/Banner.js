import React from 'react';
import '../styles/banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = ({ start }) => {
    return (
        <>
            <div className="banner">
                <Carousel
                    infiniteLoop={true}
                >
                    {start.map((cur, i) => {
                        return (
                            <div key={i}>
                                <img src={cur} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default Banner