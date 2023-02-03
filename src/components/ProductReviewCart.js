import React from 'react'

const ProductReviewCart = ({ image, price, name, review }) => {
    return (
        <>
            <div className="reviewCard">
                <img src={image} alt="" />
                <h4>{review}</h4>
                <span>{name}</span>
                <b>{price}</b>

            </div>
        </>
    )
}

export default ProductReviewCart