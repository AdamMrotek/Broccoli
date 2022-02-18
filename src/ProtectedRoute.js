import React from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute(user) {
  return <div>ProtectedRoute</div>;
  <Navigate to="/main" />;
}
