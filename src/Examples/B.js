import React, { Component } from 'react'
import { Consumer } from './Context'
export class B extends Component {
  render() {
    return (
      <div>
        <h2>Component 2</h2>
        <Consumer>
          {
            ({data,handleCheck})=>(
              <div>
                <h3>{data.name} and {data.roll}</h3>
                <button onClick={handleCheck}>Click me</button>
              </div>
            )
          }
        
        </Consumer>
      </div>
    )
  }
}

export default B
