import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const VideoDetail = ({ video }) => {
  useEffect(() => {
    if (video) {
      const videoSrc = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      console.log(videoSrc);

      const jsonString = '{ "link": "' + videoSrc + '"}';
      const jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);

      console.log("before api call");

      axios.post('http://localhost:6030/melody', jsonObject)
        .then(response => {
          console.log("API call successful:", response.data);
          // Handle response data if needed
        })
        .catch(error => {
          console.error("Error making API call:", error);
          // Handle error if needed
        })
        .finally(() => {
          console.log("after api call");
        });
    }
  }, [video]);

  if (!video) return null;

  return (
    <div>
      <div className="center">
        {/* <iframe src={videoSrc} allowFullScreen title="Video player" className="video"/> */}
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        {/* <p>{video.snippet.description}</p> */}
      </div>
    </div>
  );
};

export default VideoDetail;
