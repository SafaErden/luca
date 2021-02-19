import React from 'react';
import { useDispatch } from 'react-redux';
import { star } from '../../store/actions/starActions';
import Upvote from '../Icons/Upvote';
import Downvote from '../Icons/Downvote';
import Share from '../Icons/Share';
import Star from '../Icons/Star';

const Footer = ({ question: { id, stared } }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    star(id)(dispatch);
  };
  return (
    <div className='w-100 d-flex align-items-center justify-content-between'>
      <div className='d-flex'>
        <Upvote />
        <Downvote />
        <span>Pregunta juan.c23 en</span>
        <strong>Matemáticas 6º</strong>
      </div>
      <div className='d-flex'>
        <Share />
        <button
          type='button'
          className='btn btn-link border-0 simplebox p-0 m-0 text-dark'
          onClick={handleLike}>
          {stared ? <Star /> : <Star />}
        </button>
      </div>
    </div>
  );
};

export default Footer;
