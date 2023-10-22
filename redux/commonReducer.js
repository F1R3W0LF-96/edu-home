import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  notifications: [],
};

const commonReducer = createSlice({
  name: "common",
  initialState,
  reducers: {
    addNotifications(state, action) {
      state.notifications = action.payload.data;
    },
  },
});

export const { addNotifications } = commonReducer.actions;
export default commonReducer.reducer;
