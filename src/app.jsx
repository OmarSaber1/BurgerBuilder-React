import React, { Component } from 'react';
import CheckOut from './components/burgerBuilder/ordersummary/orderSummary';
import NavBar from './components/NavBar/navBar';
import Burger from './container/burger/burger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/contact/contact';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                <NavBar/>
                <Switch>
                <Route path="/contact" component={Contact} />
                <Route  path="/" component={Burger} />
                </Switch>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default App;