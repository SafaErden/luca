const question = {
  questions: [],
  loading: false,
  error: null,
};

const questionsReducer = (state = question, action) => {
  const { type, payload } = action;
  let newQuestions = [];
  switch (type) {
    case 'SUCCESS_QUESTIONS':
      return {
        ...state,
        loading: false,
        questions: payload.questions,
      };
    case 'FAKE_QUESTION_STAR': {
      const questionIndex = state.questions.findIndex(p => p.id === action.payload);
      const isStared = state.questions[questionIndex].stared;
      const newQuestion = { ...state.questions[questionIndex], stared: !isStared };
      newQuestions = [
        ...state.questions.slice(0, questionIndex),
        newQuestion,
        ...state.questions.slice(questionIndex + 1),
      ];
      return {
        ...state,
        loading: false,
        questions: newQuestions,
      };
    }
    case 'BEGIN_QUESTIONS':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_QUESTIONS':
      return {
        ...state,
        loading: false,
        questions: [],
      };
    default:
      return state;
  }
};

export { questionsReducer };
