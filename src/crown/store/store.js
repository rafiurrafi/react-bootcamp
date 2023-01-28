import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const middleware = [logger];
const enhanceMiddleware = compose(applyMiddleware(...middleware));
const store = createStore(rootReducer, undefined, enhanceMiddleware);
export default store;
