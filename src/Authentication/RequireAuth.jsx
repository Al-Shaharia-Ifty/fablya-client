import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "../Context/AuthProvider";

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;
