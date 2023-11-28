import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { accessTokenSelector } from "src/store/selectors/auth";

export default function DefaultLayout() {
  const loggedIn = useSelector(accessTokenSelector);

  if (!loggedIn) {
    return <Navigate to={"/app"} />;
  }
  return <Outlet />;
}
