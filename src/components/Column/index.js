import React from 'react';

const Column = ({ children }) => {
  return (
    <div className='row'>
      <div className='col card-columns'>{children}</div>
    </div>
  );
};

export default Column;
