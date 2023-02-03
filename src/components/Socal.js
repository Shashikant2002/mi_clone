import React from 'react';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import '../styles/socal.css';

const Socal = () => {
  return (
    <ul className="socal flex">
        <li><a href="/"><AiFillLinkedin /></a></li>
        <li><a href="/"><BsTwitter /></a></li>
        <li><a href="/"><FaInstagramSquare /></a></li>
        <li><a href="/"><AiFillFacebook /></a></li>
    </ul>
  )
}

export default Socal