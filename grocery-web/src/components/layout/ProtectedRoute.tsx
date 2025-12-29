import { Navigate, Outlet } from "react-router-dom";

type Props = {
  adminOnly?: boolean;
};
const ProtectedRoute = ({ adminOnly }: Props) => {
    // We’ll wire this to JWT + backend later.
  const isAuthenticated = true; // TEMP
  const isAdmin = true; // TEMP

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;