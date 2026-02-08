import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  // const navigate=useNavigate();
  if (!user) {
    return <Navigate to="/login" />;
    // navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
