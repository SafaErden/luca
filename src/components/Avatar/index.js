import React from 'react';

const Avatar = ({ src, alt }) => {
  const handleAvatarError = () => {
    document.getElementById('avatarImage').src = '/reader.png';
  };

  let source = src;
  let alternative = alt;
  if (!src) {
    source = '/reader.png';
  }
  if (!alt) {
    alternative = 'noInfo';
  }
  return (
    <div className='img-container'>
      <img
        src={source}
        alt={alternative}
        className='rounded-circle'
        id='avatarImage'
        onError={handleAvatarError}
      />
    </div>
  );
};

export default Avatar;
