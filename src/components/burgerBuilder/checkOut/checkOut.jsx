import React from "react";
import "./checkOut.css";

const CheckOut = (props) => {
  let TotalPrice = props.TOTAL_PRICE;
  return (
    <div>
      {props.checkedOut == false ? null : (
        <div className="Modal">
          <h1>You ordered a delicious Burger with</h1>
          {props.ingrident.map((el) => {
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
};

export default CheckOut;
