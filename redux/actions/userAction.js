import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../constants/roomConstants";
import { setCookie } from "cookies-next";

export const userLogin = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:7000/api/login`, data);

    setCookie("token", response.data.token);
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
