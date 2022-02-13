import {
  SET_USER_QUESTION,
  SET_USER_LEVEL,
  SET_USER_DIFFCULTY,
  SET_USER_SCORE,
  SET_USER_DATA,
} from './Actions/User';

const initState = {
  user : {
    question : 0,
    level: 0,
    difficulty: 'easy',
    score: 0,
  }
};

function quizReducer(state = initState, action) {
  switch (action.type) {
  case SET_USER_QUESTION:
    return {...state, user: {
      ...state, question: action.payload
    }};
  case SET_USER_LEVEL:
    return {...state, user: {
      ...state, level: action.payload
    }};
  case SET_USER_DIFFCULTY:
    return {...state, user: {
      ...state, difficulty: action.payload
    }};
  case SET_USER_SCORE:
    return {...state, user: {
      ...state, score: action.payload
    }};
  case SET_USER_DATA:
    return {...state, user: action.payload};
  default:
    return state;
  }
}

export default quizReducer;