import { ADD_ERROR } from "../actions/actionTypes";

const errors = (state = [], action) => {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default errors;
