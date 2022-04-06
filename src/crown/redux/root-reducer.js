import userReducer from "./user/user-reducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";

export default combineReducers({
  currentUser: userReducer,
  hidden: cartReducer,
});
