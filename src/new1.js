import React, { Component, Fragment } from "react";
import Testing from "./Testing";
class new1 extends Component {
  state = {
    users: [
      { id: 1, name: "Suresh", class: "A" },
      { id: 2, name: "Suresh Hero", class: "B" },
    ],
  };
  render() {
    // console.log(this.state.users[1])
    const users = this.state.users.map((user) => {
      return (
        <h3 key={user.id}>
          {user.id}
          {user.name}
        </h3>
      );
    });
    return (
        <>
        <div>{users}</div>
        {/* {users.name} */}
        <Testing isValue ={false}key={users} value={users}/>
      </>
    );
  }
}

export default new1;
