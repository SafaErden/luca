import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Icons/Logo';
import Centro from '../Icons/Centro';
import Community from '../Icons/Community';
import Home from '../Icons/Home';
import Plan from '../Icons/Plan';
import Play from '../Icons/Play';
import Quiz from '../Icons/Quiz';

const Sidebar = () => {
  return (
    <div className='min-vh-100 sidebar bg-white position-fixed'>
      <Logo />
      <div className=''>
        <div className='m-5'>
          <NavLink to='/Inicio' activeClassName='active-link'>
            <Home />
            <span className='ml-2'>Inicio</span>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink to='/Cursos' activeClassName='active-link'>
            <Play /> <span className='ml-2'>Mis cursos</span>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink to='/Quizzes' activeClassName='active-link'>
            <Quiz /> <span className='ml-2'>Quizzes</span>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink to='/Plan' activeClassName='active-link'>
            <Plan /> <span className='ml-2'>Mi plan de estudios</span>
          </NavLink>
        </div>
        <div className='m-5' activeClassName='active-link'>
          <NavLink to='/Community' activeClassName='active-link'>
            <Community /> <span className='ml-2'>Community</span>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink to='/Centro' activeClassName='active-link'>
            <Centro /> <span className='ml-2'>Centro de ayuda</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
