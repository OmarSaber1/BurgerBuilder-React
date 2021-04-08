import React from "react";
import './burgerControl.css'
const BurgerControl = (props) => {

    let TOTAL_PRICE = props.ingrident.reduce((a,{totalPrice})=> a+totalPrice ,0);
    
    console.log(TOTAL_PRICE)
    console.log(props.ingrident[0].price)
  return (
    <div>
      {props.ingrident.map((el) => {
        return (
          <div>
            <div className="row bg-light">
              <div className="col ">{el.name} </div>
              <div className="col"><span className="bg-danger">{el.price}$</span> </div>
              <div className="col ">
                <button
                  onClick={() => props.ingridentIncrementHandler(el)}
                  className="btn btn-success btn-sm"
                >
                  +
                </button>
                <button
                    disabled={el.Quantity==0? true:false}
                  onClick={() => props.ingridentDecrementHandler(el)}
                  className="btn btn-danger btn-sm"
                >
                  -
                </button>
              </div>
              <div className="col">{el.Quantity}P</div>
              <div className="col">{el.totalPrice.toFixed(2)} $</div>
            </div>
            
          </div>
        );
      })}
      
                <div  className="bg-warning font-weight-bold">
                    {/* first time reduce is called (a == 0) >>> (0,{totalPrice}) => 0 + totalPrice=10 =10
                    second time a= 10  =>> (10 , newtotalPrice)=> 10+ newtotalPRice == 20
                    third time a = 20 ....
                    so we need to assign >>>>>> 0  at first at the end of reduce*/}
                  TotalPrice = {TOTAL_PRICE.toFixed(2)}$
            </div>

            <button className="OrderButton"
            disabled={TOTAL_PRICE ==0 ? true :false}
            onClick = {props.checkedOutHandler}
            >ORDER NOW!</button>
    </div>
  );
};

export default BurgerControl;
