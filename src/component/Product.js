import { Component } from "react";

class Product extends Component{
    constructor(props){
        super(props);
    
        this.state={
            Product_ID:"",
            qty:0
        }
    }
    addToCart=(pid)=>{
        this.setState({
            Product_ID:pid,
            qty: this.state.qty+1
        })
    }
    render(){
        return(
            <>
            <button onClick={()=>{ this.addToCart(1)}}>Add to cart</button>
            <Cart Product_ID={this.state.Product_ID} qty={this.state.qty}/>
            </>
        )
    }
    
}

export default Product;
class Cart extends Component{
    constructor(props){
        super(props);

        this.state={
           qty:this.props.qty

        }
    }
    componentDidMount(){
        console.log("Excute after programm complated")
    }
    componentDidUpdate(preProps, preState){
        console.log("Updating...");
    }
    // updateQ=()=>{
    //     this.setState({
    //         qty:this.state.qty+1
    //     })
    // }
    static getDerivedStateFromProps(props,state){
        console.log(props.qty)
        console.log(state.qty)
        if(props.qty!==state.qty){
            return {qty: props.qty}
        }
        return null;
    }
    render(){
        return(
            <>
            <h2>CART: {this.state.qty}</h2>
            <button onClick={this.updateQ}>Update Qty</button>
            
            </>
        )
    }
}
