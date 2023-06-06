import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";

const user = createSlice({
  name: "user",
  initialState: {
    loggedUser: "",
  },
  reducers: {
    fetchUser: (state, action) => {
      state.loggedUser = action.payload.data;
    },
  },
});

export const { fetchUser } = user.actions;
export default user.reducer;
