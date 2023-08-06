import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/about">About</Link>
            </ul>
            <ul>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
      </Router>
    );
    // function Home() {
    //   return <h1>Hello Home</h1>;
    // }
    // function About() {
    //   return <h1>Hello About</h1>;
    // }
    // function Contact() {
    //   return <h1>Hello Contact</h1>;
    // }
  }
}
export default Routing;
