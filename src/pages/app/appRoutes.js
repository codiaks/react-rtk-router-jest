import React from "react";
import ProtectedLayout from "src/layouts/ProtectedLayout";

const Home = React.lazy(() => import("./Home/Home"));
const User = React.lazy(() => import("./Home/User"));

export const appRoutes = [
  {
    path: "app",
    element: <ProtectedLayout />,
    children: [
      { element: <Home />, path: "", name: "Home" },
      { element: <User />, path: "user", name: "User" },
    ],
    name: "App",
  },
];
