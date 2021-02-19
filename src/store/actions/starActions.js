import api from '../../api';
import { toaster } from '../../components/Toaster';

export const star = id => async dispatch => {
  dispatch({ type: 'FAKE_QUESTION_LIKE', payload: id });
  try {
    await api.post('/like', { id });
  } catch (err) {
    dispatch({ type: 'FAKE_QUESTION_LIKE', payload: id });
    toaster('Something went Wrong');
  }
};
