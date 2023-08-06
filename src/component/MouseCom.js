// import React, { useEffect, useState } from "react";

// const MouseCom = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   const logMouseMove=(e)=>{
//     setX(e.clientX);
//     setY(e.clientY);
//   }
//   useEffect(()=>{
//     console.log("running")
//     window.addEventListener('mousemove',logMouseMove)
//   },[])
//   return (
//     <div>
//       X-{x},Y-{y}
//     </div>
//   );
// };

import React, { Component } from "react";

export class MouseCom extends Component {
    constructor(props){
        super(props)
        this.state={
            x:0,
            y:0
        }
    }
    logMouseMove=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
  componentDidMount() {
    console.log("running")
    window.addEventListener("mousemove",this.logMouseMove);

  }
  render() {
    return <div>
        X-{this.state.x},Y-{this.state.y}
    </div>;
  }
}

export default MouseCom;
