import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const LoginCardSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addDetails(state, action) {
      state.data = action.payload;
    },
  },
});

export const LoginCardActions = LoginCardSlice.actions;
