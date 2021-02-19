import React, { useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { FaRegPaperPlane } from 'react-icons/fa';
import { getAnswers, answer } from '../../store/actions/answerActions';
import FormikControl from '../Formik/FormikControl';
import Answer from '../ListItem/Answer';
import ButtonLoader from '../Loader/ButtonLoader';

const Answers = ({ able: { id, type } }) => {
  const dispatch = useDispatch();

  const { answers, loading } = useSelector(state => state.loadAnswersReducer, shallowEqual);

  const content = [];
  answers.forEach(c => {
    content.push(<Answer answer={c} key={c.id} />);
  });
  useEffect(() => {
    dispatch(getAnswers(id, type));
    return () => {
      dispatch({ type: 'SUCCESS_QUESTIONS', payload: { ables: [] } });
      dispatch({ type: 'SUCCESS_LOAD_ANSWERS', payload: { answers: [] } });
    };
  }, []);
  const handleAnswer = (values, resetter) => {
    answer(values.answer, id, type)(dispatch);
    resetter();
  };
  return (
    <div className='card mt-2'>
      <div className='card-header p-0 px-3 py-2 bg-white'>
        <Formik
          onSubmit={(values, { resetForm }) => handleAnswer(values, resetForm)}
          initialValues={{
            answer: '',
          }}>
          {({ values }) => (
            <Form className='row'>
              <FormikControl
                name='answer'
                styler='simplebox border-0 col p-0'
                control='textarea'
                rows='1'
                maxLength='280'
                inputStyle='border-0 simplebox'
                placeholder='Answer'
              />
              <button
                type='submit'
                className='btn btn-link btn-sm col-auto px-3'
                disabled={loading || !values.answer}>
                {loading ? <ButtonLoader /> : <FaRegPaperPlane />}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {content}
    </div>
  );
};

export default Answers;
