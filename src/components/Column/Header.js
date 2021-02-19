/* eslint-disable camelcase */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBookReader, FaEdit } from 'react-icons/fa';

const Header = ({ able: { id, by_image, by, type, status } }) => {
  const by_images = by_image.map(item => (
    <NavLink to={`/user/profile/${item.by}`} key={item.by}>
      <img
        className='rounded-circle question-avatar'
        alt={item.by}
        src={item.image}
        data-holder-rendered='true'
      />
    </NavLink>
  ));
  return (
    <div className='card-header bg-white'>
      <div className='row'>
        <div className='col-auto'>{by_images}</div>
        <div className='col text-muted p-0 m-0 mt-n1'>
          {by_image.length <= 1 && (
            <NavLink to={`/user/profile/${by}`}>
              <strong>{by}</strong>
            </NavLink>
          )}
        </div>
        <div className='col-auto'>
          {type === 'Writing' &&
            (status === 2 ? (
              <NavLink to={`/writing/read/${id}`} className='text-info mr-3'>
                <FaBookReader />
              </NavLink>
            ) : (
              <NavLink to={`/writing/write/${id}`} className='text-info mr-3'>
                <FaEdit />
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
/* eslint-enable camelcase */
