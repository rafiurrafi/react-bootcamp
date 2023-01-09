import { combineReducers } from "redux";
import { categoryReducer } from "./category/category.reducer";
import { userReducer } from "./user/user.reducer";
export const rootReducers = combineReducers({
  user: userReducer,
  category: categoryReducer,
});
