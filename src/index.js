import ReactDom from 'react-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from "./app";
 
ReactDom.render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    ,
     document.querySelector('#root')
    )