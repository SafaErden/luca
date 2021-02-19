import React from 'react';
import { useHistory } from 'react-router-dom';
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
    <div className='modal fade text-dark p-0' id='questionModal'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>no</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <Formik
            onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
            initialValues={{
              question: '',
            }}
            validationSchema={questionValidationSchema}>
            {() => (
              <Form className='w-100'>
                <div className='modal-body d-flex justify-content-center p-0'>
                  <div className='card w-100'>
                    <div className='card-body m-0 p-0'>
                      <FormikControl
                        name='question'
                        styler='simplebox border-0'
                        control='textarea'
                        rows='5'
                        maxLength='280'
                        inputStyle='border-0 simplebox'
                        placeholder="{t('post.whatsup')}"
                      />
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='submit' className='btn btn-info btn-sm' disabled={loading}>
                    {loading ? <ButtonLoader /> : "t('post.post')"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Ask;
