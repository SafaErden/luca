import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = ({ name, styler, inputStyle, label, ...rest }) => {
  return (
    <div className={styler}>
      {label !== '' && (
        <label htmlFor={name} className='font-weight-bold'>
          {label}
        </label>
      )}
      <Field id={name} name={name} {...rest} className={`form-control ${inputStyle}`} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
export default Input;
