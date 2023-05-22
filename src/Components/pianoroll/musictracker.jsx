import React, { Component } from 'react'
  
class Tracker extends Component {
  constructor(){
    super()
    this.state = {Position : 0}
    this.makeTimer()
  }
  
  listnums = [1,2,3]

  makeTimer(){
    setInterval(() => {

        this.setState((state)=> {
          if (state.Position > 610)
            return {Position: 0};
          else
            return {Position: state.Position + 40};
        })
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