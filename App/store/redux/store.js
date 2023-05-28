import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "./authentication";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
