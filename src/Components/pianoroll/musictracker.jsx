import React, { Component } from 'react'
  
class Tracker extends Component {
  constructor(){
    super()
    this.state = {Position : 0}
    this.makeTimer()
  }
  
  makeTimer(){
    setInterval(() => {
      //if (this.state.Position > 640) 
          //new_pos = 0
      //else
      //let new_pos= this.state.Position + 640/16;
        this.setState({Position: Math.random() * 100})
    }, 1000)
  }


  render()
  {
    return (
        <path d = {"M " + this.state.Position + " 150 l 0 -130 l -6 -6 l 0 -15 l 14 0 l 0 15 l -6 6 l 0 150 Z"} class="playhead"></path>
    )
  }
}
  
export default Tracker