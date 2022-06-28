import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
const store = createStore(rootReducer, undefined);
export default store;
