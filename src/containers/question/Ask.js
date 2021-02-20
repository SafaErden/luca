import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import FormikControl from '../../components/Formik/FormikControl';
import { ask } from '../../store/actions/questionActions';
import ButtonLoader from '../../components/Loader/ButtonLoader';
import { questionValidationSchema } from '../../validations/questionValidations';

const Ask = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.questionsReducer.loading);

  const handleSubmit = values => {
    ask(values, history)(dispatch);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-10 col-lg-8 col-xl-7'>
          <div className='modal-header border-0 m-0 p-0 my-3 mb-5'>
            <h4 className='modal-title'>Haz una pregunta</h4>
            <NavLink to='/' className='close d-md-none'>
              <span aria-hidden='true'>&times;</span>
            </NavLink>
            <NavLink to='/' className='btn btn-sm btn-custom-cancel d-none d-md-block px-2 py-2'>
              CANCELAR
            </NavLink>
          </div>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              title: '',
              body: '',
            }}
            validationSchema={questionValidationSchema}>
            {() => (
              <Form className='w-100'>
                <div className='modal-body d-flex justify-content-center p-0'>
                  <div className='card-body m-0 p-0'>
                    <FormikControl
                      name='title'
                      label='Título de publicación'
                      styler='mb-5 p-0'
                      control='input'
                      maxLength='100'
                      inputStyle='askBox'
                      placeholder='Escribe tu publicación aquí'
                    />
                    <FormikControl
                      name='body'
                      label='Publicación'
                      styler=''
                      control='textarea'
                      rows='5'
                      maxLength='400'
                      inputStyle='askBox'
                      placeholder='Escribe tu publicación aquí'
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className='btn btn-custom btn-sm w-100 text-white p-2 m-0 mt-4'
                  disabled={loading}>
                  {loading ? <ButtonLoader /> : 'PUBLICAR'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Ask;
