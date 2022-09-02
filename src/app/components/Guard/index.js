import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~hooks/useAuth';
import AccessDenied from '~views/AccessDenied';

const Guard = ({ redirect, children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>{children}</>
  ) : redirect ? (
    <Navigate to={redirect} />
  ) : (
    <AccessDenied />
  );
};

export default Guard;
