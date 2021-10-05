import { combineReducers } from "redux";
import { auth } from "./auth";
import { events } from "./events";

const Reducers = combineReducers({
  auth,
  events,
});

export default Reducers;
