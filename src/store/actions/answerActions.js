import api from '../../api';
import { toaster } from '../../components/Toaster';

export const answer = (c, id, type) => async dispatch => {
  try {
    const response = await api.post('/answer', { c, id, type });
    if (response.data) {
      dispatch({ type: 'SUCCESS_SEND_ANSWER', payload: response.data });
    } else {
      dispatch({ type: 'ERROR_SEND_ANSWER' });
      toaster('Something went wrong');
    }
  } catch (err) {
    dispatch({ type: 'ERROR_SEND_ANSWER' });
    toaster('Something went wrong');
  }
};

export const getAnswers = (id, type) => async dispatch => {
  try {
    const response = await api.post('/answer/answers', { id, type });
    if (response.data) {
      dispatch({ type: 'SUCCESS_LOAD_ANSWERS', payload: response.data });
    } else {
      toaster('Something went wrong');
    }
  } catch (err) {
    toaster('Something went wrong');
  }
};
