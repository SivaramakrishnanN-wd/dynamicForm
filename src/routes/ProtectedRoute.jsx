import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "../components/Layout";

const ProtectedRoute = () => {
  const isAuthenticated = !!sessionStorage.getItem("authToken");

  return isAuthenticated ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
