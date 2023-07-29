import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants/roomConstants";

export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload?.roomsCount,
        resPerPage: action.payload.resPerPage,
        // filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };

    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const roomDetailReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ROOM_DETAILS_SUCCESS:
      return {
        room: action.payload,
      };
    case ROOM_DETAILS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const userReducer = (
  state = { a: null, token: null, success: false },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        a: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
