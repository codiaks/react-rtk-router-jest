import { createSelector } from "@reduxjs/toolkit";

export const authSelector = (state) => state.auth;
export const accessTokenSelector = createSelector(
  authSelector,
  (state) => state?.accessToken
);
