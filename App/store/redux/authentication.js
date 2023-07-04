import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authentication = createSlice({
  name: "authentication",
  initialState: {
    token: "",
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    handleAuthenticate: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      typeof state.token !== "undefined" && AsyncStorage.getItem("token")
        ? AsyncStorage.setItem("token", action.payload.token)
        : null;
      typeof state.user !== "undefined"
        ? AsyncStorage.setItem("user", JSON.stringify(action.payload.user))
        : null;
    },
    handleLogout: (state) => {
      state.token = "";
      state.isAuthenticated = false;
      state.user = {};
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("user");
    },
  },
});

export const { handleAuthenticate, handleLogout } = authentication.actions;
export default authentication.reducer;
