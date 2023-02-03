import React from 'react';
import ProductReviewCart from './ProductReviewCart.js';
import '../styles/productReview.css';

const ProductReview = ({review}) => {
  return (
    <>
        <div className="productReview">
            <div className="container flex">
                {
                  review && review.map((ele, i) => {
                    return (
                      <ProductReviewCart key={i} image={ele.image} review={ele.review} price={ele.price} name={ele.name} index={i} />
                    )
                  })
                }
            </div>
        </div>
    </>
  )
}

export default ProductReview