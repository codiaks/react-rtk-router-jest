import React from "react";
import DefaultLayout from "src/layouts/DefaultLayout";

const Login = React.lazy(() => import("./Login/Login"));

export const authRoutes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
];
