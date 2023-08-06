import React, { Component } from 'react'

export class Suresh extends Component {
    state={
        marks:0
    }
    handleMouse=()=>{
      this.setState({
        marks:this.state.marks+1
      })
    }
  render() {
    return (
      <div>
        <h2 onMouseOver={this.handleMouse} >Suresh mark's - {this.state.marks}</h2>
      </div>
    )
  }
}

export default Suresh
