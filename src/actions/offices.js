import { API, SET_OFFICES } from "./actionTypes";
import { apiEndpoints } from "../utils/config";

export const getOffices = () => ({
  type: API,
  payload: {
    url: apiEndpoints.offices,
    method: "get",
    success: SET_OFFICES
  }
});
