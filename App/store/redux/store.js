import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "./authentication";
import userReducer from "./user";
import { api } from "../../services/api";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});
