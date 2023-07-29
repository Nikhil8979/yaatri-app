import { combineReducers } from "redux";
import {
  allRoomsReducer,
  roomDetailReducer,
  userReducer,
} from "./roomReducers";
const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetail: roomDetailReducer,
  user: userReducer,
});

export default reducer;
