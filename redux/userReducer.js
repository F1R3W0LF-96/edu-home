import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isAuth: false,
  isProfileCompleted: false,
  profileViewed: [],
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
    deductCoins(state, action) {
      const profileViewed = localStorage.getItem("profileViewed");
      if (profileViewed) {
        state.profileViewed = JSON.parse(profileViewed);
      } else {
        localStorage.setItem("profileViewed", JSON.stringify([]));
      }
      if (state.data) {
        const isProfileViewed = state.profileViewed?.includes(
          action.payload.id
        );
        if (!isProfileViewed) {
          state.data["coins"] = state.data?.coins - action.payload.coin;
          state.profileViewed.push(action.payload.id);
          localStorage.setItem(
            "profileViewed",
            JSON.stringify(state.profileViewed)
          );
          action.payload.cb({ ...state.data });
        }
      }
    },
    removeUserDetails(state, action) {
      state.data = null;
    },
    setProfileViewedData(state, action) {
      const profileViewed = localStorage.getItem("profileViewed");
      if (profileViewed) {
        state.profileViewed = JSON.parse(profileViewed);
      } else {
        localStorage.setItem("profileViewed", JSON.stringify([]));
      }
    },
  },
});

export const {
  addDetails,
  isAuthenticated,
  deductCoins,
  removeUserDetails,
  setProfileViewedData,
} = userReducer.actions; // Destructuring here
export default userReducer.reducer;
