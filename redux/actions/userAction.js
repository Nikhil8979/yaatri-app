import axios from "axios";

import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";
import { setCookie } from "cookies-next";

export const userLogin = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:7000/api/login`, data);

    setCookie("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data.user,
    });
    return response;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const userRegiseter = (data) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `http://localhost:7000/api/register`,
      data,
      config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
    return response;
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
