import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../store/actions/questionActions';
import QuestionBody from '../../components/Column/QuestionBody';
import Loader from '../../components/Loader/Loader';

const List = () => {
  const dispatch = useDispatch();
  const { questions, loading } = useSelector(state => state.questionsReducer);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  const content = [];
  questions.forEach(question => {
    content.push(<QuestionBody question={question} key={question.id} />);
  });
  return (
    <div className='container'>
      <ul class='list-unstyled'>
        <>
          {loading && (
            <div className='w-100'>
              <Loader loading />
            </div>
          )}
          {content}
        </>
      </ul>
    </div>
  );
};

export default List;
