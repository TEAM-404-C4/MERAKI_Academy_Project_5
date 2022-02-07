import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Components/Reducer/index";
import { BrowserRouter  } from "react-router-dom";
import {storage} from './Components/Firebase/firebase'
ReactDOM.render(
  <BrowserRouter>

    <Provider store={store}>
    <App />

    </Provider>
    </BrowserRouter>,

  document.getElementById("root")
);
