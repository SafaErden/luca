/* eslint-disable camelcase */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar';

const User = ({ answer }) => {
  return (
    <div className='card-body py-3 answer-line-height'>
      <div className='row'>
        <div className='col-2'>
          <NavLink to={`/user/profile/${answer.profile.username}`}>
            <Avatar src={answer.profile.avatar} alt={answer.profile.username} />
          </NavLink>
        </div>
        <div className='col p-0'>
          <div className='p-0 m-0 mt-1 word-break'>
            <NavLink to={`/user/profile/${answer.profile.username}`}>
              <strong className='mr-2'>{answer.profile.username}</strong>
            </NavLink>
            {answer.answer.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
/* eslint-enable camelcase */
