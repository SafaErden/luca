import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import App from './App';
import Toast from './components/Toaster';
import './css/index.css';
import './css/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <App />
      <Toast />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
