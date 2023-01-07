import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggin: localStorage.getItem("user") || null,
  },

  reducers: {
    login(state, action) {
      state.isLoggin = localStorage.setItem("user", action.payload);
      state.isLoggin = true
    },

    logout(state) {
      
      localStorage.clear();
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
