import React from 'react';
import VideoItem from './videoItem';
import { Box, ThemeProvider } from '@mui/material/';


const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    //return <div className='ui relaxed divided list'>{renderedVideos}</div>;

    return(
    <Box sx={{ display: 'flex', justifyContent: 'space-around',
    flexWrap: 'wrap', marginBottom: '60px', alignContent: 'space-evenly',
    rowGap: '40px', marginTop: '50px', marginLeft: '120px', marginRight: '120px'}}>
        {renderedVideos}</Box>
    )
};
export default VideoList;