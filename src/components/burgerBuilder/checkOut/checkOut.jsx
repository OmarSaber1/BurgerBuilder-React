import React, { Component } from "react";
import "./checkOut.css";

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
  render(){
    let TotalPrice = this.props.TOTAL_PRICE;
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
            <h1>totalPrice = {TotalPrice}</h1>
            <button className="btn btn-warning">CheckOut!</button>
          </div>
        )}
      </div>
  );
}};

export default CheckOut;
