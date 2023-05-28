import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";

const user = createSlice({
  name: "user",
  initialState: {
    data: "",
  },
  reducers: {
    fetchUser: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { fetchUser } = user.actions;
export default user.reducer;
