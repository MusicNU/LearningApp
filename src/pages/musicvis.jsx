import '../App.css';
import LineSetup from '../Components/pianoroll/LineSetup';
import Tracker from '../Components/pianoroll/musictracker';
import Vis from '../Components/pianoroll/entirebar';
import React, { Component } from 'react';
import Circ from '../Components/rhythmViz'
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

const Display = () => {
  const input = [['A','B','C','D','E','F','G','A','B','C','D','E','F','G','A','B'],
  ['A','B','C','A','B','C','A','B','C','A','B','C','A','B','C','A']];
  const beat_times = [0.301859410430839, 0.6965986394557823, 1.0913378684807256, 1.4628571428571429, 1.8808163265306121, 2.2523356009070294, 2.6006349206349206, 2.972154195011338, 3.3436734693877552, 3.7384126984126986, 4.156371882086168, 4.551111111111111, 4.9458503401360545, 5.340589569160998, 5.758548752834467, 6.176507936507937, 6.5712471655328795, 6.965986394557823, 7.383945578231293, 7.801904761904762, 8.219863945578231, 8.568163265306122, 8.962902494331066, 9.357641723356009, 9.752380952380953, 10.147120181405896, 10.541859410430838, 10.913378684807256, 11.3081179138322, 11.702857142857143, 12.120816326530612, 12.538775510204081, 12.979954648526077, 13.374693877551021, 13.769433106575963, 14.164172335600908, 14.605351473922903, 15.023310657596372, 15.441269841269841, 15.81278911564626, 16.207528344671204, 16.555827664399093, 16.904126984126986, 17.252426303854875, 17.600725623582765, 17.972244897959182, 18.3437641723356, 18.738503401360543, 19.13324263038549, 19.52798185941043, 19.922721088435374, 20.29424036281179, 20.66575963718821, 21.037278911564627, 21.43201814058957, 21.826757369614512, 22.221496598639455, 22.639455782312925, 23.057414965986396, 23.49859410430839, 23.893333333333334, 24.288072562358277, 24.706031746031748, 25.10077097505669, 25.495510204081633, 25.913469387755104, 26.308208616780046, 26.70294784580499, 27.12090702947846, 27.492426303854874, 27.88716553287982, 28.281904761904762, 28.676643990929705, 29.071383219954647, 29.442902494331065, 29.814421768707483, 30.209160997732425, 30.603900226757368, 30.95219954648526, 31.32371882086168, 31.695238095238096, 32.066757369614514, 32.43827664399093, 32.80979591836735, 33.18131519274377, 33.55283446712018, 33.94757369614513, 34.365532879818595, 34.78349206349206, 35.131791383219955, 35.50331065759637, 35.898049886621315, 36.29278911564626, 36.664308390022676, 37.05904761904762, 37.430566893424036, 37.82530612244898, 38.22004535147392, 38.66122448979592, 39.12562358276644, 39.497142857142855, 39.86866213151927]

  const [params, setParams] = useState({"section": 0,
      "color":"red",
      "beat_times": 0,
      "paused": 0
      });

  function updateColor() {

    const colors = ["red","green","blue", "yellow", "magenta"];
    const num = Math.floor(Math.random() * 5);
    return colors[num];

  }

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    async function setUpdates() {
    for (let i = 0; i < beat_times.length - 1; i++) {
      // setTimeout(() => setParams({section: params.section,
      //            color: updateColor(),
      //           beat_times: params.beat_times}), 2000 * i)
      if (params.paused === 1)
      {
        clearTimeout()
        await sleep(15000)
      }
      
      await sleep((beat_times[i+1] - beat_times[i]) * 1000)
      setParams(previousState => {
        return {...previousState,
             color: updateColor()}})

      
    }
  }

  async function togglePause() {
    if(params.paused === 0)
    {
    setParams(previousState => {
        return {...previousState, paused: 1 }})
        await waitPause()
    }
    else 
    setParams(previousState => {
        return {...previousState, paused: 0 }})
}

    async function waitPause() {
                await sleep(15000)
        }
        
    
  
    
  // setInterval(() => {
        
  //         if (params.section === 1)
  //           setParams({section: 0,
  //             color: params.color});
  //         else
  //           setParams({section: params.section + 1,
  //             color: params.color}); 
  //       }, 17000)

  //   beat_times.map(el => {
  //     setTimeout(() => {
  //       setParams({section: params.section,
  //         color: findColor(),
  //       beat_times: params.beat_times});}, el)
  // })
    

  async function fetchBeats(state, props) {
    try {
      let response = await fetch('http://localhost:6030/rhythm');
      let data = await response.json();
      return {section: state.section,
        beat_times: data};
    }
    catch(Error)
    {
      console.log(Error)
    }
}

  //<Vis list = {input[params.section]}></Vis> 
  //<button onclick={setUpdates()} >click me</button>
    return (
      <>
      <button onClick={setUpdates}> Get started! </button>
        <Circ color = {params.color}/>
        <p>{params.color}</p>
        <p>{params.paused}</p>
        <button onClick = {togglePause}> pause </button>
        
      </>
    )
  }

  
export default Display