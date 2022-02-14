import axios from 'axios';

export const GET_ALL_QUIZ = 'GET_ALL_QUIZ';
export const GET_QUIZ_BY_ID = 'GET_QUIZ_BY_ID';

export const getAllQuiz = () => async dispatch => {
  try {
    const response = await axios.get('http://127.0.0.1:8080/api/quiz/');

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
    const response = await axios.get(`http://127.0.0.1:8080/api/quiz/${difficulty}`);

    dispatch({
      type: GET_ALL_QUIZ,
      payload: response.data.quiz
    });

    return response.data;
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
