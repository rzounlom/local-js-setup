import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => (state.isLoggedIn = !state.isLoggedIn),
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
