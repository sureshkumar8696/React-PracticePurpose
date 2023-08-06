import {Component} from 'react';

class frji extends Component{
    constructor(props){
        super(props);
        // this.chnageme = this.chnageme.bind(this);
        this.state={
            roll:'23',
            course: this.props.course
        }
    }
    chnageme=()=>{
        this.setState({
            roll:"54",
            course:"MBA"
        })
        console.log("Hitting me...")
    }
    render(){
        const numbers = [3,5,4];
        // const newNumbers = numbers.map(function(numbers){
        //     console.log(numbers);
        //     return <li>{numbers}</li>
        // });
        return(
            <>
            <button onClick={this.chnageme}>Hit me {this.state.roll}</button>
            <h3>{this.props.course}</h3>
            {/* <ul>{newNumbers}</ul> */}
            <ul>
            {
                numbers.map((numbers)=>{
                    return <li key={numbers}>{numbers}</li>
                })
            }
            </ul>
            </>
        )
    }
};

export default frji;