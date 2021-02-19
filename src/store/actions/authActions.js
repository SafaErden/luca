import api from '../../api';
import { toaster } from '../../components/Toaster';

export const register = (username, email, password, history, t) => async dispatch => {
  dispatch({ type: 'AUTH_BEGIN' });
  try {
    const response = await api.post('auth/registrations', {
      username,
      email,
      password,
    });
    if (response.data.token) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
      history.push('/auth/signin');
    } else {
      dispatch({ type: 'AUTH_ERROR' });
      toaster(t('wentWrong'));
    }
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR' });
    toaster(t('wentWrong'));
  }
};

export const login = (username, password, t, history) => async dispatch => {
  dispatch({ type: 'AUTH_BEGIN' });
  try {
    const response = await api.post('/auth/sessions', {
      username,
      password,
    });

    if (response.data.error === 'locked') {
      toaster(t('auth.lockedAccount'), 5000);
      setTimeout(() => {
        dispatch({ type: 'SIGNIN_LOCK' });
        history.push('/auth/forgot');
      }, 5000);
    } else if (response.data.error === 'activate') {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
      toaster(t('auth.confirmSent'));
    } else if (response.data.user) {
      dispatch({ type: 'SIGNIN_SUCCESS', payload: response.data });
      localStorage.setItem('user', JSON.stringify(response.data));
      api.defaults.headers.common.Authorization = `Bearer ${response.data.user}`;
    } else {
      dispatch({ type: 'AUTH_ERROR' });
      toaster(t('auth.invalidCredentials'));
    }
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR' });
    toaster(t('wentWrong'));
  }
};

export const logOut = () => dispatch => {
  dispatch({ type: 'LOG_OUT' });
  localStorage.removeItem('user');
};

export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
