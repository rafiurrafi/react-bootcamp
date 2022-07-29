import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, thunk, sagaMiddleware];

const persisConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persisedReducer = persisedReducer(persisConfig, rootReducer);

const composeEnhancer = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, undefined, composeEnhancer);
sagaMiddleware.run();
export default store;
