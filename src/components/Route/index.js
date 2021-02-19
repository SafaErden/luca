import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ path, component, ...props }) => {
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.authReducer.isLoggedIn,
  }));
  return isLoggedIn ? (
    <Route path={path} component={component} {...props} />
  ) : (
    <Redirect push to='/auth/signup' />
  );
};

export default PrivateRoute;
