import React from 'react';
import '../styles/preNavbar.css';
import Socal from './Socal';
import { BiChevronDown } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const PreNavbar = () => {
    const level_1_open = (i) => {
        const level_1 = document.getElementsByClassName('level_1');
        level_1[i].classList.toggle('level_1_Active');
    }

    return (
        <>
            <div className="prenav">
                <div className="container flex justifyContentspaceBetween">
                    <ul className="impLink flex alignItemsCenter">
                        <li><a href="https://www.mi.com/in/"><p>MI INDIA</p></a></li><p>|</p>
                        <li><a href="https://www.mi.com/in/"><p>ONLINE HELP</p></a></li><p>|</p>
                        <li><a onClick={() => level_1_open(0)}><p className='flex alignItemsCenter'>RETAIL STORE <BiChevronDown /></p></a>
                            <ul className='level_1'>
                                <li><NavLink to="/">Retail Stores</NavLink></li>
                                <li><NavLink to="/">Retail Stores</NavLink></li>
                                <li><NavLink to="/">Retail Stores</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <Socal />
                </div>
            </div>
        </>
    )
}

export default PreNavbar