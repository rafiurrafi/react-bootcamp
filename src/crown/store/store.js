import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
const middleware = [logger];
const enhancedMiddleware = compose(applyMiddleware(...middleware));
export const store = createStore(rootReducer, undefined, enhancedMiddleware);
