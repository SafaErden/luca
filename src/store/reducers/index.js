import { combineReducers } from 'redux';
import { authReducer, passwordReducer } from './authReducer';
import { questionsReducer } from './questionReducer';
import { loadAnswersReducer, loadUsersReducer } from './loadReducer';

const rootReducer = combineReducers({
  authReducer,
  questionsReducer,
  passwordReducer,
  loadUsersReducer,
  loadAnswersReducer,
});

export default rootReducer;
