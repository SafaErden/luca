import React from 'react';
import { NavLink } from 'react-router-dom';
import PHeader from './Header';

const Body = ({ able }) => {
  return (
    <div className='card'>
      <PHeader able={able} />
      <NavLink to={`/writing/write/${able.id}`}>
        {able.image && <img className='card-img-top' src={able.image} alt={able.by} />}
      </NavLink>
      <NavLink to={`/writing/write/${able.id}`}>
        {able.description && (
          <>
            <h5 className='card-title m-2'>{able.title}</h5>
            <div className='card-body m-0 p-0'>
              <p className='m-2 bio_wrap'>{able.content}</p>
            </div>
          </>
        )}
      </NavLink>
    </div>
  );
};

export default Body;
