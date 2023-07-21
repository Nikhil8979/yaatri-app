import axios from "axios";
import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
} from "../constants/roomConstants";

export const getRooms =
  (req, currentPage = 1) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:7000/api/retrieve/rooms?page=${currentPage}`
      );
      dispatch({
        type: ALL_ROOMS_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: ALL_ROOMS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};

export const getRoomDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:7000/api/retrieve/room/${id}`
    );
    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
