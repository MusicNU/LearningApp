import React, { Component } from 'react';

const Tracker = (props) => {

    return (
      <>
        <path d = {"M " + props.displacement + " 150 l 0 -130 l -6 -6 l 0 -15 l 14 0 l 0 15 l -6 6 l 0 150 Z"} class="playhead"></path>
      </>
    )}

  
export default Tracker