import axios from 'axios';
import {Platform} from 'react-native';

export const GET_ALL_QUIZ = 'GET_ALL_QUIZ';
export const GET_QUIZ_BY_ID = 'GET_QUIZ_BY_ID';

const BASE_URL = Platform.OS === 'ios' ? 'http://127.0.0.1:8080/api' : 'http://10.0.2.2:8080/api';

export const getAllQuiz = () => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/quiz`);

    dispatch({
      type: GET_ALL_QUIZ,
      payload: response.data.quiz
    });

    return response.data.quiz;
  } catch (err) {
    console.error(err.response);
  }
};

export const getQuizByDifficulty = (difficulty) => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/quiz/${difficulty}`);

    console.log(response);
    dispatch({
      type: GET_ALL_QUIZ,
      payload: response.data.quiz
    });

    return response.data.quiz;
  } catch (err) {
    console.error(err.response);
  }
};

export const resetQuizData = () => dispatch => {
  try {
    dispatch({
      type: GET_ALL_QUIZ,
      payload: []
    });

  } catch (err) {
    console.error(err.response);
  }
};
