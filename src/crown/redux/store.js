import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const configReducer = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const middleware = [logger, thunk];
const enhancedMiddleware = compose(applyMiddleware(...middleware));
const persistedReducer = persistReducer(configReducer, rootReducer);
const store = createStore(persistedReducer, undefined, enhancedMiddleware);
export const persistor = persistStore(store);
export default store;
