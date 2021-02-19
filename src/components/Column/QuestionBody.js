import React from 'react';
import Avatar from '../Avatar/Big';
import Footer from './Footer';

const Body = ({ question }) => {
  return (
    <li className='py-3 card-footer m-0'>
      <div className='media'>
        <Avatar />
        <div class='media-body pl-3 ml-5'>
          <h5 class='mt-0 mb-1'>{question.title}</h5>
          {question.body}
          <div className='d-none d-md-block'>
            <Footer question={question} />
          </div>
        </div>
      </div>
      <div className='d-md-none'>
        <Footer question={question} />
      </div>
    </li>
  );
};

export default Body;
