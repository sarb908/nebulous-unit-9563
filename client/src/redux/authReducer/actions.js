import axios from "axios";
import * as types from "./actionTypes";

export const signupHandler = (data) => (dispatch) => {
  dispatch({ type: types.SIGNUP_LOADING });
  return axios
    .post("http://localhost:8080/signup", data)
    .then((r) => {
      console.log(r);
      return dispatch({ type: types.SIGNUP_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.SIGNUP_ERROR });
    });
};

export const loginHandler = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  return axios
    .post("http://localhost:8080/login", data)
    .then((r) => {
      console.log(r);
      return dispatch({
        type: types.LOGIN_SUCCESS,
        payload: r.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.LOGIN_ERROR });
    });
};
