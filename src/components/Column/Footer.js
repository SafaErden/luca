import React from 'react';
import { useDispatch } from 'react-redux';
import { star } from '../../store/actions/starActions';
import Upvote from '../Icons/Upvote';
import Downvote from '../Icons/Downvote';
import Share from '../Icons/Share';
import Star from '../Icons/Star';
import StarNull from '../Icons/StarNull';

const Footer = ({ question: { id, stared } }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    star(id)(dispatch);
  };
  return (
    <div className='w-100 d-flex align-items-center justify-content-between pt-3 pb-1'>
      <div className='d-flex align-items-center'>
        <span className='mr-3'>
          <Upvote />
        </span>
        <span className='mr-4'>
          <Downvote />
        </span>
        <small className='text-secondary'>
          <span className='mr-1'>Pregunta juan.c23 en</span>
          <strong>
            <span className='text-custom'>Matemáticas 6º</span>
          </strong>
        </small>
      </div>
      <div className='d-flex'>
        <span className='mr-4'>
          <Share />
        </span>
        <button
          type='button'
          className='btn btn-link border-0 simplebox p-0 m-0 text-dark'
          onClick={handleLike}>
          {stared ? <Star /> : <StarNull />}
        </button>
      </div>
    </div>
  );
};

export default Footer;
