// store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
  // Add enhancers, preloadedState, etc. if needed
});

export default store;
