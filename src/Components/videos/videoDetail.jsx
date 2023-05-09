import React from "react";

const VideoDetail = ({ video }) => {
  // to add something before video add an if for !video
  if (video) {

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="center">
        <iframe src={videoSrc} allowFullScreen title="Video player" className="video"/>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        {/* <p>{video.snippet.description}</p> */}
      </div>
    </div>
  );

  }
};

export default VideoDetail;