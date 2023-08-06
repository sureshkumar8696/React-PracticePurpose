import React, { Component } from "react";
import B from "./B";
import C from "./C";
import { Provider } from "./Context";
export class A extends Component {
  state = {
    name: "suresh",
    roll: 2003,
  };
  handleClickContext=()=>{
    this.setState({
      roll: this.state.roll+1
    })
  }
  render() {
   const ValueConext ={
    data :this.state,
    handleCheck:this.handleClickContext
   }
    return (
      <div>
        <h1>Component A</h1>
        <Provider value={ValueConext}>
          <B />
          <C/>
        </Provider>
      </div>
    );
  }
}

export default A;
