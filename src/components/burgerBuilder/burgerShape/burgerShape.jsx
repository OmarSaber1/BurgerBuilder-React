import React from 'react';       
import './burgerShape.css'
import PropTypes from 'prop-types'
import CheckOut from '../ordersummary/orderSummary';

const BurgerShape = (props) => {

    let ingrident = null;

    switch(props.type){
        case ("BreadBottom") :
            <div className="BreadBottom"></div>
        break;
        case ("BreadTop") :
            <div className="BreadTop"></div>
        break;
        case ("Seeds1") :
            <div className="Seeds1"></div>
        break;
        case ("Seeds2") :
            <div className="Seeds2"></div>
        break;
        case ("Meat") :
            <div className="Meat"></div>
        break;
        case ("Cheese") :
            <div className="Cheese"></div>
        break;
        case ("Salad") :
            <div className="Salad"></div>
        break;
        case ("Bacon") :
            <div className="Bacon"></div>
        break;
    }
    return ( 
        <div className="h-90">
        <div className={props.type}>
        &nbsp;
        </div>

        </div>
     );
}


BurgerShape.propTypes = {
    type : PropTypes.string.isRequired
 }
export default BurgerShape;