import React from 'react';
import Fire from '../Icons/Fire';
import Badge from '../Icons/Badge';
import Flower from '../Icons/Flower';
import Notification from '../Icons/Notification';
import Search from '../Icons/Search';
import Avatar from '../Avatar';

const Head = () => {
  return (
    <div className='container-fluid p-0 m-0'>
      <div className='row m-0 p-0 py-4 px-4'>
        <div className='col d-flex align-items-center justify-content-start'>
          <form className='md-form mr-4'>
            <select className='form-control select-border p-0 pl-2'>
              <option>Explorar</option>
            </select>
          </form>
          <Search />
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <Fire />
          <span className='ml-2 mr-4 h4 text-custom_gray mb-n1'>0</span>
          <Badge />
          <span className='ml-2 mr-4 h4 text-custom_gray mb-n1'>0</span>
          <Flower />
          <span className='ml-2 h4 text-custom_gray mb-n1'>0</span>
        </div>
        <div className='col d-flex align-items-center justify-content-end'>
          <Notification />
          <div className='mx-4'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
