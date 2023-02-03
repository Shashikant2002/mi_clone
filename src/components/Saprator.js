import React from 'react';
import "../styles/saprator.css";

const Saprator = ({data = "Please Fill"}) => {
  return (
    <div className='sparator'><h2>{data}</h2></div>
  )
}

export default Saprator