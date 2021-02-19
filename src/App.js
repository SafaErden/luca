import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Auth from './containers/auth';
import Ask from './containers/question/Ask';
import Questions from './containers/question/List';
import NoMatch from './containers/noMatch';

const App = () => (
  <BrowserRouter>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto d-none d-md-block'>
          <Sidebar />
        </div>
        <div className='col bg-light'>
          <div>
            <Header />
          </div>
          <Switch>
            <Route path='/ask' component={Ask} />
            <Route path='/' exact component={Questions} />
            <Route path='/questions' component={Questions} />
            <Route path='/sign_in' component={Auth} />
            <Route path='/sign_up' component={Auth} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </div>
    <div className='container-fluid bg-white fixed-bottom border-top p-0 shadow-lg d-md-none'>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
