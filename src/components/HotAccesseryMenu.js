import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/hotAccesseryMenu.css";

const HotAccesseryMenu = () => {
    return (
        <div className="HotAccesseryMenu flex justifyContentCenter">
            <Link to="/music" >Music Store</Link>
            <Link to="/smartDevices" >Smart Device</Link>
            <Link to="/" >Home</Link>
            <Link to="/lifeStyle" >Life Style</Link>
            <Link to="/mobileAccessories" >Mobile Accessories</Link>
        </div>
    )
}

export default HotAccesseryMenu