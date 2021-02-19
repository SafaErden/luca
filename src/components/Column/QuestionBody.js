import React from 'react';
import { NavLink } from 'react-router-dom';
import PHeader from './Header';
import PFooter from './Footer';

const Body = ({ able }) => {
  return (
    <div className='card'>
      <PHeader able={able} />
      <NavLink to={`/question/${able.id}`}>
        {able.image && <img className='card-img-top' src={able.image} alt={able.by} />}
        {able.content && (
          <div className='card-body'>
            <p className='blockquote mb-0 bio_wrap'>{able.content}</p>
          </div>
        )}
      </NavLink>
      <PFooter able={able} />
    </div>
  );
};

export default Body;
