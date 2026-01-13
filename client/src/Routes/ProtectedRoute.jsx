import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // toast.error("You are not logged in"); this appears two times because of the react strict mode
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
