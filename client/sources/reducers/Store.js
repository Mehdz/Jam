import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import quizReducer from './quizReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({quizReducer, userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));