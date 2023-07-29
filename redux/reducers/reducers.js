import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailReducer } from "./roomReducers";
import { registerReducer, userReducer } from "./userReducer";
const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetail: roomDetailReducer,
  user: userReducer,
  auth: registerReducer,
});

export default reducer;
