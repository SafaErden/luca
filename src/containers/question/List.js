import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubContent from '../../components/Tab/SubContent';
import QuestionBody from '../../components/Column/QuestionBody';
import Answers from '../../components/Column/Answers';
import { getQuestions } from '../../store/actions/questionActions';
import NotFound from '../noMatch/NotFound';
import Loader from '../../components/Loader/Loader';

const Show = () => {
  const dispatch = useDispatch();
  const { id, active } = useParams();
  const { questions, loading } = useSelector(state => state.questionsReducer);
  const question = questions[0] ? questions[0] : {};
  useEffect(() => {
    dispatch(getQuestions());
    return () => {
      dispatch({ type: 'SUCCESS_QUESTIONS', payload: { ables: [] } });
      dispatch({ type: 'SUCCESS_LOAD_ANSWERS', payload: { answers: [] } });
    };
  }, []);

  const activeTab = active || 'answer';
  const itemsContent = {
    answer: <Answers able={question} />,
  };
  return (
    <>
      <div className='container pb-5'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8 col-xl-7 mt-2'>
            {loading && <Loader loading />}
            {question.id === parseInt(id, 10) && !loading && (
              <>
                <QuestionBody able={question} />
                <SubContent items={itemsContent} active={activeTab} />
              </>
            )}
            {!question.id && !loading && <NotFound />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Show;
