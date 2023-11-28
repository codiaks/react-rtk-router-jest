import { Outlet } from "react-router-dom";
import React from "react";
import { authRoutes } from "./pages/auth/authRoutes";
import { appRoutes } from "./pages/app/appRoutes";


export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      ...authRoutes,
      ...appRoutes,
      { path: "*", element: "Page Not Found" },
    ],
  },
];