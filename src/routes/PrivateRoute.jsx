import React from "react";
import { Navigate, useLocation } from "react-router";
import { useUser } from "../context/UserProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();
  const allowedRoles = ["moderator", "admin", "super-admin"]

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Login না থাকলে login page এ পাঠাবে
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Role check
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;