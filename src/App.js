import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Ask from './containers/question/Ask';
import Questions from './containers/question';
import NoMatch from './containers/noMatch';

const App = () => (
  <BrowserRouter>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto d-none d-md-block'>
          <Sidebar />
        </div>
        <div className='col content min-vh-100'>
          <div>
            <Header />
          </div>
          <Switch>
            <Route path='/ask' component={Ask} />
            <Route path='/' exact component={Questions} />
            <Route path='/Community/:active?' component={Questions} />
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
