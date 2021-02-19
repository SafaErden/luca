import React from 'react';
import Logo from './Logo';
import Centro from '../Icons/Centro';
import Community from '../Icons/Community';
import Home from '../Icons/Home';
import Plan from '../Icons/Plan';
import Play from '../Icons/Play';
import Quiz from '../Icons/Quiz';

const Sidebar = () => {
  return (
    <div className='min-vh-100 sidebar bg-white'>
      <Logo />
      <div className=''>
        <div className='m-5'>
          <Home /> Inicio
        </div>
        <div className='m-5'>
          <Play /> Mis cursos
        </div>
        <div className='m-5'>
          <Quiz /> Quizzes
        </div>
        <div className='m-5'>
          <Plan /> Mi plan de estudios
        </div>
        <div className='m-5'>
          <Community /> Comunidad
        </div>
        <div className='m-5'>
          <Centro /> Centro de ayuda
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
