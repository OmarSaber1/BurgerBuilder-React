import ReactDom from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import axios from "axios";
axios.defaults.baseURL = "https://burger-337fd-default-rtdb.firebaseio.com/";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
