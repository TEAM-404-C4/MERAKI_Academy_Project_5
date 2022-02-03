import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./login/index";
import doctorsReducer from './Doctor/index';

const reducers = combineReducers({ loginReducer,doctorsReducer });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
