import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentEmployee: {
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
      state.currentEmployee.profile = action.payload;
      state.currentEmployee.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.currentEmployee = null;
      state.currentEmployee.profile = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
