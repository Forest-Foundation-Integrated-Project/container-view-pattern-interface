import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";

const authentication = createSlice({
  name: "authentication",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    handleAuthenticate: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    handleLogout: (state) => {
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { handleAuthenticate, handleLogout } = authentication.actions;
export default authentication.reducer;
