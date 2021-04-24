import React, { useEffect } from "react";
import "./burgerControl.css";
const BurgerControl = (props) => {
  console.log(props);
  
  let TOTAL_PRICE = 0;
  if (props.ingrident) {
    TOTAL_PRICE = props.ingrident.reduce(
      (a, { totalPrice }) => a + totalPrice,
      0
    );
  }
  console.log(props.ingrident);
  return (
    <div>
      {props.ingrident
        ? props.ingrident.map((el) => {
            return (
              <div key={el.name}>
                <div className="row bg-light">
                  <div className="col ">{el.name} </div>
                  <div className="col">
                    <span className="bg-danger">{el.price}$</span>{" "}
                  </div>
                  <div className="col ">
                    <button
                      onClick={() => props.ingridentIncrementHandler(el)}
                      className="btn btn-success btn-sm"
                    >
                      +
                    </button>
                    <button
                      disabled={el.Quantity == 0 ? true : false}
                      onClick={() => props.ingridentDecrementHandler(el)}
                      className="btn btn-danger btn-sm"
                    >
                      -
                    </button>
                  </div>
                  <div className="col">{el.Quantity}P</div>
                  <div className="col">{el.totalPrice} $</div>
                </div>
              </div>
            );
          })
        : null}

      <div className="bg-warning font-weight-bold">
        TotalPrice = {TOTAL_PRICE.toFixed(2)}$
      </div>

      <button
        className="OrderButton"
        disabled={TOTAL_PRICE == 0 ? true : false}
        onClick={props.checkedOutHandler}
      >
        ORDER NOW!
      </button>
    </div>
  );
};

export default BurgerControl;
