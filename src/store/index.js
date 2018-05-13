import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers/rootReducer";
import apiMiddleware from "../middlewares/apiMiddleware";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(apiMiddleware)
);

export default store;
