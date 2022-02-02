import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./login/index"

const reducers = combineReducers({ loginReducer });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
