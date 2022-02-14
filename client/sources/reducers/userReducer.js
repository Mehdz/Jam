import {
  SET_USER_DIFFCULTY,
  SET_USER_SCORE,
  SET_USER_DATA,
} from './Actions/User';

const initState = {
  user : {
    difficulty: 0,
    score: 0,
  }
};

function userReducer(state = initState, action) {
  switch (action.type) {
  case SET_USER_DIFFCULTY:
    return {...state, user: {
      ...state.user, difficulty: action.payload
    }};
  case SET_USER_SCORE:
    return {...state, user: {
      ...state.user, score: action.payload
    }};
  case SET_USER_DATA:
    return {...state, user: action.payload};
  default:
    return state;
  }
}

export default userReducer;