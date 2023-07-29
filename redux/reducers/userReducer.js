// import {
//   CLEAR_ERRORS,
//   USER_LOGIN_FAIL,
//   USER_LOGIN_SUCCESS,
// } from "../constants/roomConstants";

// export const userReducer = (
//   state = { user: null, token: null, success: false },
//   action
// ) => {
//   console.log(action.type, action.payload, "-pau");
//   switch (action.type) {
//     case USER_LOGIN_SUCCESS:
//       return {
//         success: action.payload,
//       };
//     case USER_LOGIN_FAIL:
//       return {
//         error: action.payload,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };
