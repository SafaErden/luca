import React from 'react';
import Avatar from '../Avatar/Big';
import Footer from './Footer';
import Comment from '../Icons/Comment';

const Body = ({ question }) => {
  return (
    <li className='p-3 pt-4 border-top m-0 list-item'>
      <div className='media'>
        <Avatar />
        <div class='media-body pl-3 ml-5'>
          <div className='row'>
            <h5 class='col mt-0 mb-1 question-title'>{question.title}</h5>
            <div className='col-auto d-flex align-items-center'>
              <Comment />
              <span className='m-0 h5 ml-1 text-custom_gray'>{question.comments}</span>
            </div>
          </div>
          <div className='question-content'>{question.body}</div>
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
