import React, { Component } from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

const RhythmPage = () => {

    const timing = [1, 4, 6, 7, 10, 15, 20]
    const amp = [50, 60, 70, 100, 50, 60, 70]

    const [params, setParams] = useState({
        //"section": 0,
        "size":50,
        //"beat_times": 0,
        "index":0
        });
    
    const ii = 0
    

    function getSize(i) {

        // if (i==timing[index]){
        //     index++
        //     if (amp.length==0) return 0
        //     return amp[index-1]
        // }
        // else return 30

        if (i%2!=0){
            //ii = ii+1
            //if (amp.length==0) return 30
            //return amp.shift;
            return Math.random() * (100 - 30) + 30;
        }
        else return 30

    }
  
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  
    async function setUpdates() {
        await sleep(500)
        setParams({
                    size: getSize(params.index),
                    //section: params.section,
                    //beat_times: 0,
                    index: params.index+1})
    }
    
    
    useEffect(() => {
      setUpdates()
    });


    return(
        <>
        <div class='center'>
        <svg className="RhythCirc" width="200" height="200" viewBox="0 0 210 210">
            <circle cx="100" cy="100" r={params.size} stroke-width="3" fill="red" />
            {/* <circle cx="100" cy="100" r="60" fill="blue" /> */}
        </svg>
        </div >
        <div class='center'>
        <p>{params.size}</p>
        <p>{params.index}</p>
        <p>{ii}</p>
        <Button onClick={() => {
            alert('pause circle');
        }}> Toggle Circle
        </Button>
        </div>
        </>
    )
}

export default RhythmPage