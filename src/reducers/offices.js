import { SET_OFFICES } from "../actions/actionTypes";

const offices = (state = [], action) => {
  switch (action.type) {
    case SET_OFFICES:
      return action.payload.data;
    default:
      return state;
  }
};

export default offices;
