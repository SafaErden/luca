import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../header';
import { register } from '../../store/actions/authActions';
import Loader from '../../components/Loader/Loader';
import FormikControl from '../../components/Formik/FormikControl';
import { signUpValidationSchema } from '../../validations/authValidations';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authReducer.loading);

  const handleSubmit = values =>
    register(values.username, values.email, values.password, history)(dispatch);

  return (
    <>
      <Header />
      <div className='container p-0 pb-5 mb-5'>
        <div className='row m-0 p-5 justify-content-around align-items-center theBorder bg-white'>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              username: '',
            }}
            validationSchema={signUpValidationSchema}>
            {() => (
              <Form className='col-12 col-sm-9 col-md-7 col-lg-4'>
                <div className='text-center mb-3'>
                  {loading && <Loader loading />}
                  <div className='display-1 text-dark pb-3'>
                    <FaUserCircle />
                  </div>
                  no
                </div>
                <FormikControl
                  maxLength='25'
                  name='username'
                  styler='mt-3'
                  control='input'
                  placeholder='User name'
                />
                <div className='form-group'>
                  <button type='submit' className='btn btn-info btn-block mt-3'>
                    no
                  </button>
                </div>
                <p className='text-center'>
                  no
                  <button
                    className='font-weight-bold border-0 bg-white'
                    type='button'
                    data-toggle='modal'
                    data-target='#contactModal'>
                    no
                  </button>
                </p>
                <p className='divider-text'>
                  <span className='bg-white'>no</span>
                </p>
                <p className='text-center'>
                  no
                  <NavLink className='font-weight-bold' to='/auth/signin'>
                    no
                  </NavLink>{' '}
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUp;
