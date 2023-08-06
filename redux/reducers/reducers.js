import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailReducer } from "./roomReducers";
import {
  forgotPasswordReducer,
  registerReducer,
  resetPasswordReducer,
  updateProfileReducer,
  userReducer,
} from "./userReducer";
const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetail: roomDetailReducer,
  user: userReducer,
  auth: registerReducer,
  profile: updateProfileReducer,
  forgot: forgotPasswordReducer,
  reset: resetPasswordReducer,
});

export default reducer;
