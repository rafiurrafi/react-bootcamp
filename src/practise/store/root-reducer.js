import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: () => ({ type: "user", name: "Shaahbaz khan" }),
});
export default rootReducer;
