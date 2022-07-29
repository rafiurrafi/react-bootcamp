import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const config = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(config, rootReducer);
const middleware = [logger];
const enhancer = compose(applyMiddleware(...middleware));
const store = createStore(persistedReducer, undefined, enhancer);
export const persistor = persistStore(store);
export default store;
