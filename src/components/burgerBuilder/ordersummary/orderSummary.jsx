import React, { Component, useEffect, useState } from "react";
import "./orderSummary.css";
import axios from "axios";

const CheckOut = (props) => {
  let [{ isSpin }, isSpinSetState] = useState({
    isSpin: false,
  });

  useEffect(() => {
    axios.get("orders.json").then((res) => {
      let orderedData = [];
      for (let key in res.data) {
        orderedData.push({ ...res.data[key], id:key });
      }
      console.log(orderedData)
    });
  }, []);

  let checkingOutPost = () => {
    isSpinSetState({ isSpin: true });
    let orders = {
      ingridents: props.ingrident,
      TotalPriceIs: props.TotalPrice,
      name: "omar",
    };
    axios
      .post("orders.json", orders)
      .then((res) => isSpinSetState({ isSpin: false }))
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
              <p key={el.name}>
                {el.Quantity} &nbsp; {el.name}
              </p>
            );
          })}
          <h1>totalPrice = {props.TOTAL_PRICE.toFixed(2)}</h1>
          <button onClick={checkingOutPost} className="btn btn-warning">
            CheckOut!
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
