import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./root-reducer";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const middleware = [process.env.NODE_ENV && logger].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composeEnhancer(applyMiddleware(...middleware));

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(persistedReducer, undefined, enhancer);
export const persistor = persistStore(store);
export default store;
