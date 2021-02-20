import api from '../../api';
import { toaster } from '../../components/Toaster';

export const star = id => async dispatch => {
  dispatch({ type: 'FAKE_QUESTION_STAR', payload: id });
  try {
    await api.post('/stars', { id });
  } catch (err) {
    dispatch({ type: 'FAKE_QUESTION_STAR', payload: id });
    toaster('Something went Wrong');
  }
};
