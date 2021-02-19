import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFeather } from 'react-icons/fa';
import {
  AiOutlineMessage,
  AiOutlineCompass,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHome,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='container p-0 '>
      <div className='row justify-content-around m-0 p-0'>
        <div className='col py-1 text-center'>
          <NavLink to='/home/wall' activeClassName='text-danger'>
            <h4 className='d-md-none'>
              <AiOutlineHome />
            </h4>
            <h5 className='d-none d-md-block  m-0 p-0'>
              <AiOutlineHome />
            </h5>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <NavLink to='/user/profile' activeClassName='text-danger'>
            <h4 className='d-md-none'>
              <AiOutlineUser />
            </h4>
            <h5 className='d-none d-md-block  m-0 p-0'>
              <AiOutlineUser />
            </h5>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <button
            className='dropdown-item simplebox m-0 p-0'
            type='button'
            data-toggle='modal'
            data-target='#questionModal'>
            <h4 className='d-md-none'>
              <FaFeather />
            </h4>
            <h5 className='d-none d-md-block  m-0 p-0'>
              <FaFeather />
            </h5>
          </button>
        </div>
        <div className='col py-1 text-center text-dark'>
          <NavLink to='/explore' activeClassName='text-danger'>
            <h4 className='d-md-none'>
              <AiOutlineSearch />
            </h4>
            <h5 className='d-none d-md-block  m-0 p-0'>
              <AiOutlineCompass />
            </h5>
          </NavLink>
        </div>
        <div className='col py-1 text-center'>
          <NavLink to='/inbox/message' activeClassName='text-danger'>
            <h4 className='d-md-none'>
              <AiOutlineMessage />
            </h4>
            <h5 className='d-none d-md-block  m-0 p-0'>
              <AiOutlineMessage />
            </h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
