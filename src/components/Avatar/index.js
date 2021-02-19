import React from 'react';
import faker from 'faker';

const Avatar = () => {
  return (
    <div className='img-container'>
      <img
        src={faker.image.imageUrl()}
        alt={faker.name.findName()}
        className='rounded-circle'
        id='avatarImage'
      />
    </div>
  );
};

export default Avatar;
