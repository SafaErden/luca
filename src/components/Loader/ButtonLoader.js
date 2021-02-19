import React from 'react';
import { BeatLoader } from 'react-spinners';

const ButtonLoader = loading => (
  <>
    {loading && (
      <div className='text-center m-0 p-0'>
        <BeatLoader loading={loading} color={loading.color ? loading.color : '#fff'} size='10px' />
      </div>
    )}
  </>
);
export default ButtonLoader;
