import { authReducer } from "../features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../features/dashboard/dashboardSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);
