import {GET_ALL_QUIZ, GET_QUIZ_BY_ID} from './Actions/Quiz';

const initState = {
  quiz: {},
};

function quizReducer(state = initState, action) {
  switch (action.type) {
  case GET_ALL_QUIZ:
    return {...state, quiz: action.payload};
  case GET_QUIZ_BY_ID:
    return {...state, quiz: action.payload};
  default:
    return state;
  }
}

export default quizReducer;