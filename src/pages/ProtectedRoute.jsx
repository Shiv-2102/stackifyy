import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
