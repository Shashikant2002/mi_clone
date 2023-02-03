import React from 'react';
import OfferCard from './OfferCard.js'
import '../styles/offer.css'

const Offer = ({ offer }) => {
    return (
        <>
            <div className="offers section_equal">
                <div className="container flex flex_wrap_wrap justifyContentCenter">
                    {offer.map((cur, i) => {
                        return(
                            <OfferCard key={i} index={i} image={cur.image} url={cur.url} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Offer