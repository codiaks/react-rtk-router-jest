import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import AppLayout from "src/pages/app/AppLayout";
import { accessTokenSelector } from "src/store/selectors/auth";

export default function ProtectedLayout() {
  const location = useLocation();
  const isLoggedIn = useSelector(accessTokenSelector);
// for testing purpose checks false, originally check truth in if statement
  if (!isLoggedIn) {
    return <AppLayout />;
  }
  return <Navigate to="/" state={{ from: location }} />;
}
