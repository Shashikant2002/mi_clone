import React from 'react';
import '../styles/navbar.css';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const level_1_open = (i) => {
        const level_1 = document.getElementsByClassName('level_1_nav');
        level_1[i].classList.toggle('level_1_nav_Active');
    }
    return (
        <>
            <ul className="navbar flex alignItemsCenter">
                <li><NavLink to="/"><h5>Mi Phones</h5></NavLink></li>
                <li><NavLink to="/"><h5>Redmi Phones</h5></NavLink></li>
                <li><NavLink to="/"><h5>TV</h5></NavLink></li>
                <li><NavLink to="/"><h5>Laptop</h5></NavLink></li>
                <li><NavLink to="/"><h5>Fitness & Lifestyle</h5></NavLink></li>
                <li><NavLink to="/"><h5>Radio</h5></NavLink></li>
                <li><NavLink to="/"><h5>Accessories</h5></NavLink></li>
                <li><button className='fillBtn'><h5><AiOutlineShoppingCart /></h5></button></li>
                <li><button onClick={() => level_1_open(0)} className='fillBtn'><h5><VscAccount /></h5></button>
                    <ul className='level_1_nav'>
                        <li><NavLink className='flex justifyContentCenter' to='/'><h5>Sign In</h5></NavLink></li>
                        <li><NavLink className='flex justifyContentCenter' to='/'><h5>Sign Up</h5></NavLink></li>
                    </ul>
                </li>
                <li>
                    <form action="#" className='flex alignItemsCenter'>
                        <input type="text" placeholder='Search Here' />
                        <button className='fillBtn' type='submit'><BiSearchAlt2 /></button>
                    </form>
                </li>

            </ul>
        </>
    )
}

export default Navbar