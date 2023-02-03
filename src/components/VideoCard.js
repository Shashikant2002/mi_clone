import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const VideoCard = ({image,name}) => {
  return (
    <>
        <div className="videoCard">
            <img src={image} alt="" />
            <a href="/" ><AiOutlinePlayCircle/>
                <p>{name}</p>
            </a>
        </div>
    </>
  )
}

export default VideoCard