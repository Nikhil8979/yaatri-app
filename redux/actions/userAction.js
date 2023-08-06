import axios from "axios";

import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
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
    console.log(error.response?.data?.error, "-login erro ");
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message || error.response?.data?.error,
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
    if (error.response?.status === 401) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: 401,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error.response?.data?.message,
      });
    }
  }
};

export const updateProfile = (data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(
      `http://localhost:7000/api/update/me/profile`,
      data,
      config
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
    });
    return response;
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://localhost:7000/api/forgot-password`,
      data,
      config
    );
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
    return response;
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (data) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://localhost:7000/api/reset-password`,
      data,
      config
    );
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
    return response;
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
