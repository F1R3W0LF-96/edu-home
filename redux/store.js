// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
const persistConfig = {
  key: "rootStorage",
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
  // Add enhancers, preloadedState, etc. if needed
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
