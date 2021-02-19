import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.authReducer.isLoggedIn,
  }));
  return (
    <>
      {isLoggedIn && <Redirect push to='/' />}
      <Route path='/auth/' exact component={SignUp} />
      <Route path='/auth/signup' component={SignUp} />
      <Route path='/auth/signin' component={SignIn} />
    </>
  );
};
export default Auth;
