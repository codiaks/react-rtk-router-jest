import { useRoutes } from "react-router";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { routes } from "./GlobalRoutes";

function App() {
  console.log(routes,"routes")
  const route = useRoutes(routes);

  function App() {
  const route = useRoutes(routes);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  if (!isOnline) {
    return (
      <>
        <div> <h2>No Internet</h2> </div>
      </>
    );
  }
    
  return (
    <div>
      <Suspense fallback={"Loading..."}>{route}</Suspense>
    </div>
  );
}

export default App;
