import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";

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
      state.isAuthenticated = true;
      state.user = {
        id: 1,
        userId: "d32b8356-f81f-4823-bf77-9a967bbb630a",
        name: "Outra Pessoaaa",
        university: "IFSP",
        phone: "(12) 99999-9999",
        city: "Caraguatatuba",
        image:
          "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      };
    },
    handleLogout: (state) => {
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { handleAuthenticate, handleLogout } = authentication.actions;
export default authentication.reducer;
