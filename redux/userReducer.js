import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const userReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    addDetails(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addDetails } = userReducer.actions; // Destructuring here
export default userReducer.reducer;
