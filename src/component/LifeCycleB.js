import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ajay",
    };
    console.log("LifeCycleB: Contructor");
  }
  static getDerivedStateFromProps(props, stata) {
    console.log("LifeCycleB : getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB :componentDidMount ");
  }
  render() {
    console.log("LifeCycleB :render");
    return <>LifeCycleB</>;
  }
}

export default LifeCycleB;
