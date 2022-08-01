import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const middleware = [logger];
const enhanced = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, undefined, enhanced);
export default store;
