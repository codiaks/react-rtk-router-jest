import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken.value;
    },
    logout: () => {},
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
