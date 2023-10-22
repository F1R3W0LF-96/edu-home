// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import commonReducer from "./commonReducer";
const persistConfig = {
  key: "rootStorage",
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
  // Add more reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    // Add enhancers, preloadedState, etc. if needed
  });
  let persistor = persistStore(store);
  return { store, persistor };
};
