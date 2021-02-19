import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Route';
import Footer from './components/Footer';
import Auth from './containers/auth';
import Ask from './containers/question/Ask';
import Question from './containers/question/Show';
import Questions from './containers/question/List';
import NoMatch from './containers/noMatch';

const App = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path='/question/:id' component={Question} />
      <Route path='/ask' component={Ask} />
      <Route path='/questions' component={Questions} />
      <Route path='/sign_in' component={Auth} />
      <Route path='/sign_up' component={Auth} />
      <Route component={NoMatch} />
    </Switch>
    <div className='container-fluid bg-white fixed-bottom border-top p-0 shadow-lg'>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
