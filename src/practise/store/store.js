import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import loggerMiddleware from "./logger-middleware";
import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
export default store;
