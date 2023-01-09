import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "../../apollos/store/root-reducer";
const middleware = [logger];
const composedMiddleware = compose(applyMiddleware(...middleware));
const store = createStore(rootReducer, undefined, composedMiddleware);
export default store;
