import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container flex alignItemsCenter justifyContentspaceBetween">
                    <div className="logo">
                        <NavLink to="/"><img src={process.env.PUBLIC_URL+"/assets/images/logo.png"} alt="" /></NavLink>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header