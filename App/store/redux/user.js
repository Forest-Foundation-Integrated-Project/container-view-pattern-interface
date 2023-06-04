import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";

const user = createSlice({
  name: "user",
  initialState: {
    userData: "",
  },
  reducers: {
    fetchUser: (state, action) => {
      state.userData = action.payload.data;
    },
  },
});

export const { fetchUser } = user.actions;
export default user.reducer;
