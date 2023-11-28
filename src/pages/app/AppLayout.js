import React from "react";
import { Outlet } from "react-router";

function AppLayout(props) {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

AppLayout.propTypes = {};

export default AppLayout;
