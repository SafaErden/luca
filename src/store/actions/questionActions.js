import api from '../../api';
import { toaster } from '../../components/Toaster';

export const ask = (values, history) => async dispatch => {
  dispatch({ type: 'BEGIN_QUESTIONS' });
  try {
    const response = await api.post('/questions/ask', values);
    if (response.data.ables) {
      dispatch({ type: 'SUCCESS_QUESTIONS', payload: response.data });
      history.push(`/question/${response.data.ables[0].id}`);
      toaster('Asked Successfully');
    } else {
      dispatch({ type: 'ERROR_QUESTIONS' });
      toaster('Something went wrong');
    }
  } catch (err) {
    dispatch({ type: 'ERROR_QUESTIONS' });
    toaster('Something went wrong');
  }
};

export const getQuestions = () => async dispatch => {
  dispatch({ type: 'BEGIN_QUESTIONS' });
  try {
    const response = await api.get(`/questions`);
    if (response.data.questions) {
      dispatch({ type: 'SUCCESS_QUESTIONS', payload: response.data });
    } else {
      dispatch({ type: 'ERROR_QUESTIONS' });
      toaster('Something went wrong');
    }
  } catch (err) {
    dispatch({ type: 'ERROR_QUESTIONS' });
    toaster('Something went wrong');
  }
};
