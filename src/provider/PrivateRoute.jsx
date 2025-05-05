import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;