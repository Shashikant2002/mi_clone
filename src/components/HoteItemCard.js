import React from 'react'

const HoteItemCard = ({name, price, image, index}) => {
  return (
    <>
        <div className="hotItemCard">
            <img src={image} alt="" />
            <p><b>{name}</b></p>
            <span>{price}</span>
        </div>
    </>
  )
}

export default HoteItemCard