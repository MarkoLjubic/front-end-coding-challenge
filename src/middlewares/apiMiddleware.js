import axios from "axios";

import { API } from "../actions/actionTypes";
import { addError } from "../actions/errors";

const apiMiddleware = ({ getState, dispatch }) => next => action => {
  const { type, payload } = action;

  if (type !== API) {
    return next(action);
  }

  axios({
    method: payload.method,
    url: payload.url, // should be baseURL + payload.url
    data: payload.data
  })
    .then(response => {
      dispatch({
        type: payload.success,
        payload: {
          data: response.data
        }
      });
    })
    .catch(error => dispatch(addError(error)));
};

export default apiMiddleware;
