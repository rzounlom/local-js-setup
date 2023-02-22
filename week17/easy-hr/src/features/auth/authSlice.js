import { createSlice } from "@reduxjs/toolkit";
const currentUser = localStorage.getItem("currentUser");

const initialState = {
  currentEmployee: {
    profile: currentUser ? JSON.parse(currentUser) : {},
    isLoggedIn: currentUser ? true : false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      state.currentEmployee.profile = action.payload;
      state.currentEmployee.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem("currentUser");
      state.currentEmployee.profile = {};
      state.currentEmployee.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authSlice;
