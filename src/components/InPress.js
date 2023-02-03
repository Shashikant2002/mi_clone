import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../styles/inpress.css";

const InPress = ({ end }) => {
    return (
        <>
            <div className="inpress section_equal">
                <Carousel
                    infiniteLoop={true}
                >
                    {end && end.map((cur, i) => {
                        return (
                            <div className='inpressCard' key={i}>
                                <img src={cur.image} />
                                <div className="data">
                                    <h2>{cur.name}</h2>
                                    <h5>{cur.description}</h5>
                                    <h3>{cur.source}</h3>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default InPress