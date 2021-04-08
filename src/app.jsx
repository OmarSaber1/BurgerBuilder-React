import React, { Component } from 'react';
import CheckOut from './components/burgerBuilder/checkOut/checkOut';
import NavBar from './components/NavBar/navBar';
import Burger from './container/burger/burger';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <Burger/>
            </div>
         );
    }
}
 
export default App;