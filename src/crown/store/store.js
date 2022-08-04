import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [logger, thunk];
const enhanceComposed = compose(applyMiddleware(...middleware));
const store = createStore(persistedReducer, undefined, enhanceComposed);
export const persistor = persistStore(store);
export default store;
