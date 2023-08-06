import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ajay",
    };
    console.log("LifeCycleA: Contructor");
  }
  static getDerivedStateFromProps(props, stata) {
    console.log("LifeCycleA : getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA :componentDidMount ");
  }
  render() {
    console.log("LifeCycleA :render");
    return (
      <>
        LifeCycleA
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
