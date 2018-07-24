import { ADD_ERROR } from "./actionTypes";

export const addError = error => ({
  type: ADD_ERROR,
  payload: error
});
