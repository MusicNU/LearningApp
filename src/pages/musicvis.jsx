import '../App.css';
import LineSetup from '../Components/pianoroll/LineSetup';
import Tracker from '../Components/pianoroll/musictracker';
import Vis from '../Components/pianoroll/entirebar';
import React, { Component } from 'react';

class Display extends Component {
  constructor(){
    super()
    this.state = {section : 0}
    this.makeTimer()
  }

  
  input = [['A','B','C','D','E','F','G','A','B','C','D','E','F','G','A','B'],
  ['A','B','C','A','B','C','A','B','C','A','B','C','A','B','C','A']];

  makeTimer(){
    setInterval(() => {

        this.setState((state, props)=> {
          if (state.section === 1)
            return {section: 0};
          else
            return {section: state.section + 1};
        })
    }, 17000)
  }

  render()
  {
    return (
      <Vis list = {this.input[this.state.section]}></Vis> 
    )
  }
}
  
export default Display