import React from 'react'

const OfferCard = ({ image, url, index }) => {
    return (
        <>
            <a href={url}>
                <div style={{ width: "340px" }}>
                    <img src={image} alt={`${index} offer`} />
                </div>
            </a>
        </>
    )
}

export default OfferCard