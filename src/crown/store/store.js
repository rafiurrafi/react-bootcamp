import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleware = [logger];
const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, undefined, enhancer);
export default store;
