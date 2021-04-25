import React, { useEffect, useState } from "react";
import BurgerControl from "../burgerControl/burgerControl";
import BurgerShape from "../burgerShape/burgerShape";
import CheckOut from "../ordersummary/orderSummary";

const BurgerIngrident = (props) => {

  let TOTAL_PRICE = 0; 
   if(props.ingrident){
    TOTAL_PRICE = props.ingrident.reduce(
      (a, { totalPrice }) => a + totalPrice,0) 
   }
 
  console.log(TOTAL_PRICE )

  return (
    <div className="text-center">
      <BurgerShape type="BreadTop " />
      {props.transformedIngreident}
      <BurgerShape type="BreadBottom" />
      <CheckOut 
      ingrident={props.ingrident}
      checkedOut = {props.checkedOut}
      TOTAL_PRICE = {TOTAL_PRICE}
       />
       {/* <h1>{TOTAL_PRICE}</h1> */}
    </div>
  );
};

export default BurgerIngrident;
