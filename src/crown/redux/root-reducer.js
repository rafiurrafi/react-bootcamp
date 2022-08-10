import { combineReducers } from "redux";
import { CartReducer } from "../contexts/cart.context";
import { categoryReducer } from "./category/category.reducer";
import { UserReducer } from "./user/user.reducer";
const rootReducer = combineReducers({
  user: UserReducer,
  category: categoryReducer,
  cart: CartReducer,
});
export default rootReducer;
