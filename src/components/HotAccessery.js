import React from 'react';
import HotItemCard from './HoteItemCard.js'
import "../styles/hotAccessories.css"

const HotAccessery = ({ music, musicCover, smartDevices, smartDevCover, home, homeCover, lifestyle, lifestyleCover, mobile, mobileCover }) => {
    return (
        <>
            <div className="hotaccessery">
                <div className="container flex">
                    <div className="coverimg">
                        {musicCover && <img src={musicCover} alt="" />}
                        {smartDevCover && <img src={smartDevCover} alt="" />}
                        {homeCover && <img src={homeCover} alt="" />}
                        {lifestyleCover && <img src={lifestyleCover} alt="" />}
                        {mobileCover && <img src={mobileCover} alt="" />}
                    </div>
                    <div className="product flex flex_wrap_wrap justifyContentspaceBetween">
                        {
                            music && music.map((ele, i) => {
                                return (
                                    <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={i} />
                                )
                            }).slice(0, 5)
                        }
                        {
                            smartDevices && smartDevices.map((ele, i) => {
                                return (
                                    <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={i} />
                                )
                            }).slice(0, 5)
                        }
                        {
                            home && home.map((ele, i) => {
                                return (
                                    <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={i} />
                                )
                            }).slice(0, 5)
                        }
                        {
                            lifestyle && lifestyle.map((ele, i) => {
                                return (
                                    <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={i} />
                                )
                            }).slice(0, 5)
                        }
                        {
                            mobile && mobile.map((ele, i) => {
                                return (
                                    <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={i} />
                                )
                            }).slice(0, 5)
                        }
                        <div className="hotItemCard">
                            <p><b>Browse More</b></p>
                            <span>Click Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotAccessery