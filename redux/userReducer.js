import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isAuth: false,
  isProfileCompleted: false,
};

const userReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    addDetails(state, action) {
      state.data = { ...action.payload.data };
    },
    isAuthenticated(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const { addDetails, isAuthenticated } = userReducer.actions; // Destructuring here
export default userReducer.reducer;
