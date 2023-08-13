import '../App.css';
import LineSetup from '../Components/pianoroll/LineSetup';
import Tracker from '../Components/pianoroll/musictracker';
import Vis from '../Components/pianoroll/entirebar';
import React, { Component } from 'react';
import Circ from '../Components/rhythmViz'
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

const Display = () => {
  const input = [['A','B','C','D'],['E','F','G','A'],['B','C','D','E'],['F','G','A','B']];
  //['A','B','C','A','B','C','A','B','C','A','B','C','A','B','C','A']];
  

  const [params, setParams] = useState({"section": 0,
                                        "count": 0});
  const [notes, setNotes] = useState([]);



// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://n0vsfssecf.execute-api.us-east-1.amazonaws.com/melody");
//       if (!response.ok) {
//         console.log('Network response was not ok');
//         return;
//       }
//       const jsonData = await response.json();
//       setNotes(jsonData);
//     } catch (error) {
//       console.log('Error fetching data: ' + error.message);
//     }};

//     setNotes(fetchData());
//   }, []);

  useEffect(() => {
    let timer = setInterval(() => {
      setParams((prevState) => ({
        ...prevState,
        count : prevState.count + 1 
    }));
    console.log("params:", params)

     if((params.count+1) % 4 === 0 && params.count != 0){
      setParams((prevState) => ({
        ...prevState,
        section: params.section + 1
    }));
    if(params.section === input.length-1)
    setParams((prevState) => ({
      ...prevState,
      section: 0
  }));
     } 
    }, 1000)
    
    return () => { 
    clearInterval(timer)
     }
  }, [params]);

return (
  <>
  <div class='center'>
    <Vis list = {input[params.section]} count = {params.count}></Vis> 
  </div>
  </>
)
}
  
    


  
export default Display