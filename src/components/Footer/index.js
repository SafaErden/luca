import React from 'react';
import { NavLink } from 'react-router-dom';
import Centro from '../Icons/Centro';
import Community from '../Icons/Community';
import Home from '../Icons/Home';
import Plan from '../Icons/Plan';
import Play from '../Icons/Play';
import Quiz from '../Icons/Quiz';

const Footer = () => {
  return (
    <div className='container p-0 '>
      <div className='row justify-content-around m-0 p-0 py-2'>
        <div className='col py-1 text-center'>
          <NavLink to='/home/wall' activeClassName='text-danger'>
            <h4>
              <Home />
            </h4>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <NavLink to='/user/profile' activeClassName='text-danger'>
            <h4>
              <Play />
            </h4>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <button
            className='dropdown-item simplebox m-0 p-0'
            type='button'
            data-toggle='modal'
            data-target='#questionModal'>
            <h4>
              <Quiz />
            </h4>
          </button>
        </div>
        <div className='col py-1 text-center text-dark'>
          <NavLink to='/explore' activeClassName='text-danger'>
            <h4>
              <Plan />
            </h4>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <NavLink to='/inbox/message' activeClassName='text-danger'>
            <h4>
              <Community />
            </h4>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <NavLink to='/inbox/message' activeClassName='text-danger'>
            <h4>
              <Centro />
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
