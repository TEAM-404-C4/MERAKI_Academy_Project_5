import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
