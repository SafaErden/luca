import { combineReducers } from 'redux';
import { questionsReducer } from './questionReducer';

const rootReducer = combineReducers({
  questionsReducer,
});

export default rootReducer;
