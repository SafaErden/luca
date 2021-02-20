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
      <div className='row justify-content-around m-0 p-0 py-3'>
        <div className='col text-center p-0 m-0'>
          <NavLink to='Inicio' className='p-3 px-4' activeClassName='active-footer'>
            <Home />
          </NavLink>
        </div>
        <div className='col text-center p-0 m-0'>
          <NavLink to='Cursos' className='p-3 px-4' activeClassName='active-footer'>
            <Play />
          </NavLink>
        </div>
        <div className='col text-center p-0 m-0'>
          <NavLink to='Quizzes' className='p-3 px-4' activeClassName='active-footer'>
            <Quiz />
          </NavLink>
        </div>
        <div className='col text-center p-0 m-0'>
          <NavLink to='Plan' className='p-3 px-4' activeClassName='active-footer'>
            <Plan />
          </NavLink>
        </div>
        <div className='col text-center p-0 m-0'>
          <NavLink to='Community' className='p-3 px-4' activeClassName='active-footer'>
            <Community />
          </NavLink>
        </div>
        <div className='col text-center p-0 m-0'>
          <NavLink to='Centro' className='p-3 px-4' activeClassName='active-footer'>
            <Centro />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
