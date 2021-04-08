import React, { useState } from "react";
import BurgerControl from "../../components/burgerBuilder/burgerControl/burgerControl";
import BurgerIngrident from "../../components/burgerBuilder/burgerIngredient/burgerIngrident";
import BurgerShape from "../../components/burgerBuilder/burgerShape/burgerShape";
import CheckOut from "../../components/burgerBuilder/checkOut/checkOut";

const Burger = () => {
  const [{ ingrident }, ingridentSetState] = useState({
    ingrident: [
      { name: "Salad", Quantity: 0, price: 0.7, totalPrice: 0 },
      { name: "Bacon", Quantity: 0, price: 1.6, totalPrice: 0 },
      { name: "Meat", Quantity: 0, price: 3, totalPrice: 0 },
      { name: "Cheese", Quantity: 0, price: 1.1, totalPrice: 0 },
    ],
  });

  const [{ checkedOut }, checkedOutSetState] = useState({
    checkedOut: false,
  });

  const checkedOutHandler = () => {
    checkedOutSetState({ checkedOut: true });
  };

  let transformedIngreident = ingrident
    .map((el) => {
      return [...Array(el.Quantity)].map((_, i) => (
        <BurgerShape type={el.name} key={el.name + i} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });

  if (transformedIngreident.length === 0) {
    transformedIngreident = <h2>please select ingredient</h2>;
  }

  // Handle ingrident increment

  const ingridentIncrementHandler = (ingridnt) => {
    //Clone
    const newIngrid = [...ingrident];
    const index = newIngrid.indexOf(ingridnt);
    newIngrid[index] = { ...newIngrid[index] };
    //Edit
    console.log(newIngrid[index]);
    const newQuantity = ++newIngrid[index].Quantity;
    newIngrid[index].totalPrice = newQuantity * newIngrid[index].price;
    //setState
    ingridentSetState({ ingrident: newIngrid });
  };
  //
  const ingridentDecrementHandler = (ingridnt) => {
    //Clone
    const newIngrid = [...ingrident];
    const index = newIngrid.indexOf(ingridnt);
    newIngrid[index] = { ...newIngrid[index] };
    //Edit
    if (newIngrid[index].Quantity !== 0) {
      const newQuantity = --newIngrid[index].Quantity;
      newIngrid[index].totalPrice = newIngrid[index].price * newQuantity;
      //setState
      ingridentSetState({ ingrident: newIngrid });
    }
  };

  return (
    <div className="text-center">
      <BurgerIngrident
        transformedIngreident={transformedIngreident}
        ingrident={ingrident}
        checkedOut ={checkedOut}
      />
      <BurgerControl
        ingridentIncrementHandler={ingridentIncrementHandler}
        ingridentDecrementHandler={ingridentDecrementHandler}
        key={"s"}
        ingrident={ingrident}
        checkedOutHandler = {checkedOutHandler}
        checkedOut ={checkedOut}
      />
    </div>
  );
};

export default Burger;
