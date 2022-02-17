import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./login/index";
import doctorsReducer from './Doctor/index';
import doctorRegReducer from "./DoctorRegister/index"

const reducers = combineReducers({ loginReducer,doctorsReducer,doctorRegReducer });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
