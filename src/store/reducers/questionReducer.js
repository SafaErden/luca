const question = {
  questions: [],
  loading: false,
  error: null,
};

const questionsReducer = (state = question, action) => {
  const { type, payload } = action;
  let newQuestions = [];
  if (payload && payload.removed) {
    newQuestions = state.questions.filter(p => p.id !== payload.removed);
  }
  switch (type) {
    case 'SUCCESS_QUESTIONS':
      return {
        ...state,
        loading: false,
        questions: payload.questions,
      };
    case 'FAKE_QUESTIONS_LIKE': {
      const questionIndex = state.questions.findIndex(p => p.id === action.payload);
      const isLiked = state.questions[questionIndex].liked;
      const questionLikes = state.questions[questionIndex].likes;
      const newLikes = isLiked ? questionLikes - 1 : questionLikes + 1;
      const newQuestion = { ...state.questions[questionIndex], liked: !isLiked, likes: newLikes };
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
