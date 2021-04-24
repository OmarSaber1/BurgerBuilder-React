import axios from "axios";
import React, { useEffect, useState } from "react";
import BurgerControl from "../../components/burgerBuilder/burgerControl/burgerControl";
import BurgerIngrident from "../../components/burgerBuilder/burgerIngredient/burgerIngrident";
import BurgerShape from "../../components/burgerBuilder/burgerShape/burgerShape";

const Burger = () => {
  let [ingrident, ingridentSetState] = useState([]);

  const [checkedOut, checkedOutSetState] = useState(false);

  let [isLoading, isLoadingSetState] = useState(true);

  const checkedOutHandler = () => {
    checkedOutSetState({ checkedOut: true });
  };

  let transformedIngreident = [];

  if (ingrident.length > 0) {
    transformedIngreident = ingrident
      .map((el) => {
        return [...Array(el.Quantity)].map((_, i) => (
          <BurgerShape type={el.name} key={el.name + i} />
        ));
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      });
  }

  if (transformedIngreident.length === 0) {
    transformedIngreident = <h2>please select ingredient</h2>;
  }

                                              
                                                    //useEffect 
  useEffect(() => {
    axios
      .get(
        "https://burger-337fd-default-rtdb.firebaseio.com/ingrident/ingrident.json"
      )
      .then((res) => {
        isLoadingSetState(false);
       console.log(res)
        ingridentSetState(res.data);
      })
      .then((el) => console.log(ingrident, isLoading));
  }, [ingrident != ingrident]);

  // Handle ingrident increment

  const ingridentIncrementHandler = (ingridnt) => {
    //Clone
    const newIngrid = [...ingrident];
    const index = newIngrid.indexOf(ingridnt);
    newIngrid[index] = { ...newIngrid[index] };
    //Edit
    const newQuantity = ++newIngrid[index].Quantity;
    newIngrid[index].totalPrice = newQuantity * newIngrid[index].price;
    //setState
    ingridentSetState(newIngrid);
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
      ingridentSetState(newIngrid);
    }
  };

  let burgerCom = (
    <div className="spinner-border m-5" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
 
  if (ingrident && isLoading == false) {
    burgerCom = (
      <div>
        <BurgerIngrident
          transformedIngreident={transformedIngreident}
          ingrident={ingrident}
          checkedOut={checkedOut}
        />
        <BurgerControl
          ingridentIncrementHandler={ingridentIncrementHandler}
          ingridentDecrementHandler={ingridentDecrementHandler}
          ingrident={ingrident}
          checkedOutHandler={checkedOutHandler}
          checkedOut={checkedOut}
        />
      </div>
    );
  }
  return <div className="text-center">{burgerCom}</div>;
};

export default Burger;
