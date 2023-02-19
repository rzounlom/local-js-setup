import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: {
    profile: {
      id: 1,
      firstName: "Jane",
      lastName: "Doe",
      status: "ADMIN",
      title: "HR Manager",
      userName: "jdoe@gmail.com",
      password: "I am cool",
    },
    isLoggedIn: true,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser.profile = action.payload;
      state.currentUser.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.currentUser.profile = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
