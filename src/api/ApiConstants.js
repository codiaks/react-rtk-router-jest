export const BASE_URL = process.env.REACT_APP_BASE_URL;

const authService = {
  UserLogin: "/auth/login",
  UserLogout: "/auth/logout",
  UserRefresh: "/auth/refresh",
  UserList: "/user/list",
};

export const ApiConstants = {
  BASE_URL: BASE_URL,
  ...authService,
};
