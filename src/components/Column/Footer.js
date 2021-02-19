import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { star } from '../../store/actions/starActions';

const Footer = ({ able: { id, likes, type, liked, answers } }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const loc = location.pathname.split('/')[1];
  let linkTo = '';
  if (type.toLowerCase() === 'question') {
    linkTo = `/${type.toLowerCase()}`;
  } else if (type.toLowerCase() === 'writing') {
    linkTo = `/${type.toLowerCase()}/show`;
  }
  const handleLike = (likableId, likableType) => {
    star(likableId, likableType)(dispatch);
  };
  return (
    <div className='card-footer bg-white'>
      <div className='row p-0 justify-content-between'>
        <div className='col-auto'>
          <ul className='nav nav-pills'>
            <li className='nav-item mr-1 d-flex align-items-center' id='like'>
              <button
                type='button'
                className='btn btn-link border-0 simplebox p-0 m-0 text-dark'
                onClick={() => handleLike(id, type)}>
                {liked ? <FaHeart /> : <FaRegHeart />}
              </button>
            </li>
            <li className='nav-item mr-1'>
              {loc !== `${type.toLowerCase()}` ? (
                <NavLink to={`${linkTo}/${id}/like#sub`}>
                  <small className='mr-3' id={`likeCount-${id}`}>
                    {likes}{' '}
                  </small>
                </NavLink>
              ) : (
                <a className='nav-link question-footer p-0 mr-3' data-toggle='tab' href='#nav-like'>
                  <small id={`likeCount-${id}`}>{likes} </small>
                </a>
              )}
            </li>
            <li className='nav-item'>
              {loc !== `${type.toLowerCase()}` ? (
                <NavLink to={`${linkTo}/${id}/answer#sub`}>
                  <FaRegComment /> <small>{answers}</small>
                </NavLink>
              ) : (
                <a className='nav-link question-footer p-0' data-toggle='tab' href='#nav-answer'>
                  <span>
                    <FaRegComment /> <small>{answers}</small>
                  </span>
                </a>
              )}
            </li>
          </ul>
        </div>
        <div className='col-auto'>
          <span className='h5'>
            <FiSend />
          </span>
          <span className='h5 ml-3'>
            <BsBookmark />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
