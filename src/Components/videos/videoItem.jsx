import React from 'react';
//import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video-item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>
                    <p style={{marginTop:'0px'}}>{video.snippet.title}</p>
                </div>
            </div>
        </div>
    )
};
export default VideoItem;