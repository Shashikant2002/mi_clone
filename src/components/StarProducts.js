import React from 'react';
import '../styles/starProduct.css';

const StarProducts = ({ starProduct }) => {
    return (
        <>
            <div className="startProduct section_equal">
                <div className="container flex flex_wrap_wrap justifyContentCenter alignItemsCenter">
                    <a href={starProduct[0].url} className="part w_50">
                        <img src={starProduct[0].image} alt="" />
                    </a>
                    <div className="part w_50">
                        <div className="innerPart flex">
                            <a className='w_50' href={starProduct[1].url}>
                                <img src={starProduct[1].image} alt="" />
                            </a>
                            <a className='w_50' href={starProduct[2].url}>
                                <img src={starProduct[2].image} alt="" />
                            </a>
                        </div>
                        <div className="innerPart flex">
                            <a href={starProduct[3].url}>
                            <img src={starProduct[3].image} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarProducts
