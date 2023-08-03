import axios from "axios";

import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";
import { setCookie, getCookie } from "cookies-next";
const token = getCookie("token");

export const userLogin = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:7000/api/login`, data);

    setCookie("token", response.data.token);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data,
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

export const checkUserLogin = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${data}`,
      },
    };
    const response = await axios.get(
      `http://localhost:7000/api/retrieve/check-login`,
      config
    );
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: response.data.data.user,
    });
    return response;
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response?.data?.message,
    });
  }
};
