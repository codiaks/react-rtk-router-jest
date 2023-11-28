import { useRoutes } from "react-router";
import "./App.css";
import { Suspense } from "react";
import { routes } from "./GlobalRoutes";

function App() {
  console.log(routes,"routes")
  const route = useRoutes(routes);

  return (
    <div>
      <Suspense fallback={"Loading..."}>{route}</Suspense>
    </div>
  );
}

export default App;
