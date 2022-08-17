import { combineReducers } from "redux";
import { counterReducer } from "./incrementReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
