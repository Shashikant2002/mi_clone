import React from 'react'
import VideoCard from './VideoCard.js'
import '../styles/videos.css'

const Videos = ({ videos }) => {
    return (
        <>
            <div className="videos section_equal">
                <div className="container flex justifyContentspaceBetween flex_wrap_wrap">
                    {
                        videos && videos.map((ele, i) => {
                            return (
                                <VideoCard key={i} index={i} image={ele.image} name={ele.name} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Videos