import React, { Component, useState } from "react";
import "./checkOut.css";
import axios from "axios";

const CheckOut = (props) => {


  let [{isSpin},isSpinSetState] = useState({
    isSpin : false
  });


 let checkingOutPost = () => {
   isSpinSetState({isSpin : true});
    let orders = {
      ingridents: props.ingrident,
      TotalPriceIs: props.TotalPrice,
      name: "omar",
    };
    axios
      .post("orders.json", orders)
      .then((res) =>    isSpinSetState({isSpin : false})
      )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {isSpin === true ? (
        <div className="spinner-border m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : props.checkedOut == false ? null : (
        <div className="Modal">
          <h1>You ordered a delicious Burger with</h1>
          {props.ingrident.map((el) => {
            return (
              <p>
                {el.Quantity} &nbsp; {el.name}
              </p>
            );
          })}
          <h1>totalPrice = {props.TOTAL_PRICE.toFixed(2)}</h1>
          <button onClick={() => checkingOutPost()} className="btn btn-warning">
            CheckOut!
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
