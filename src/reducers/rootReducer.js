import { combineReducers } from "redux";

import offices from "./offices";
import errors from "./errors";

const rootReducer = combineReducers({
  errors,
  offices
});

export default rootReducer;
