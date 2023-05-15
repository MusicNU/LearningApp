import React, { Component } from 'react'
  
class Tracker extends Component {
  constructor(props){
    super(props)
    this.state = {Position : 0}
    this.makeTimer()
  }
  
  makeTimer(){
    setInterval(() => {
      let new_pos= (Math.random() * 10)
        this.setState({Position: new_pos})
    }, 1000)
  }
  render(){
    return (
        <path d="M 150 150 l 0 -130 l -6 -6 l 0 -15 l 14 0 l 0 15 l -6 6 l 0 150 Z" class="playhead"></path>
    )
  }
}
  
export default Tracker