//Import React
import React from "react";
//Import React Dom
import ReactDOM from "react-dom";
//Import App
import App from "./App";
//import BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
