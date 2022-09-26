import { createStore, createMiddleware, compose, applyMiddleware } from "redux";
// import logger from "redux-logger";
import rootReducer from "./root-reducer";
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("Current state", store.getState());
  next(action);
  console.log("Updated state", store.getState());
};
const middleware = [loggerMiddleware];
const enhancer = compose(applyMiddleware(...middleware));
const store = createStore(rootReducer, undefined, enhancer);
export default store;
