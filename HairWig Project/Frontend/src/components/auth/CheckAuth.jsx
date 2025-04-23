import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function CheckAuth({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  // List of protected paths
  const protectedPaths = ['/cart', '/wishlist']; // Add more as needed

  if (!isAuthenticated && protectedPaths.some(path => location.pathname.includes(path))) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}

export default CheckAuth;