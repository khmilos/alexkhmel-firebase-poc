import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={currentUser ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
