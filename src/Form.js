import axios from "axios";
import { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      address: "",
      body: "",
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handleUsername = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // };
  // handleAddress = (event) => {
  //   this.setState({
  //     address: event.target.value
  //   });
  // };
  handleSumbit = (event) => {
    event.preventDefault();
    // alert(`${this.state.userid} ${this.state.address}`);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { userid, address } = this.state;
    return (
      <>
        <form onSubmit={this.handleSumbit}>
          <div className="username">
            <label>Username</label>
            <input
              name="userid"
              type="text"
              value={userid}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="textarea">
            <label>Address</label>
            <textarea
              name="address"
              value={address}
              onChange={this.changeHandler}
            ></textarea>
          </div>
          <button type="sumbit">Sumbit</button>
        </form>
      </>
    );
  }
}
// const Form = () => {
//     const[username,setUsername] = useState("");
//     const[address, setAddress] = useState("");

//     const handleAddress= (event)=>{
//         setAddress(event.target.value);
//     }
//     const handleUsername=(event)=>{
//         setUsername(event.target.value);
//     }
//     const handleSumbit=(event)=>{
//         alert(`${username} ${address}`)
//         event.preventDefault();
//     }
//   return (
//     <>
//       <form onSubmit={handleSumbit}>
//         <div className="username">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={handleUsername}
//           ></input>
//         </div>
//         <div className="textarea">
//           <label>Address</label>
//           <textarea
//             value={address}
//             onChange={handleAddress}
//           ></textarea>
//         </div>
//         <button type="sumbit">Submit</button>
//       </form>
//     </>
//   );
// };
export default Form;
