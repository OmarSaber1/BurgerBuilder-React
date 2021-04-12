import React, { Component } from "react";
import "./checkOut.css";
import axios from 'axios'

class  CheckOut extends Component{
  constructor(props){
    super(props)
  }
  


    shouldComponentUpdate(nextProps , nextState){
      return  nextProps.checkedOut  !== this.props.checkedOut 
    }
    componentWillUpdate(){
      console.log("Will update")
    }

    checkingOutPost =()=>{
      console.log(2)
      let orders = {
        ingridents : this.props.ingrident,
        TotalPriceIs : this.TotalPrice,
        name:"omar"
      }
      axios.post('orders.json',orders).then(res=>console.log(res)).catch(err=>console.log(err))
    }
  render(){
    return (
      <div>
        {this.props.checkedOut == false ? null : (
          <div className="Modal">
            <h1>You ordered a delicious Burger with</h1>
            {this.props.ingrident.map((el) => {
              return (
                <p>
                  {el.Quantity} &nbsp; {el.name} 
                </p>
              );
            })}
            <h1>totalPrice = {this.props.TOTAL_PRICE.toFixed(2)}</h1>
            <button onClick={()=>this.checkingOutPost()} className="btn btn-warning">CheckOut!</button>
          </div>
        )}
      </div>
  );
}};

export default CheckOut;
