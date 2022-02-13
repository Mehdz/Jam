import AsyncStorage from '@react-native-async-storage/async-storage';

export const SET_USER_LEVEL = 'SET_USER_LEVEL';
export const SET_USER_DIFFCULTY = 'SET_USER_DIFFCULTY';
export const SET_USER_SCORE = 'SET_USER_SCORE';
export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserLevel = (level) => dispatch => {
  try {
    dispatch({
      type: SET_USER_LEVEL,
      payload: level
    });
  } catch (err) {
    console.error(err.response);
  }
};

export const setUserDiffculty = (difficulty) => dispatch => {
  try {
    dispatch({
      type: SET_USER_DIFFCULTY,
      payload: difficulty
    });
  } catch (err) {
    console.error(err.response);
  }
};

export const setUserScore = (score) => dispatch => {
  try {
    dispatch({
      type: SET_USER_SCORE,
      payload: score
    });
  } catch (err) {
    console.error(err.response);
  }
};

export const setUserData = () => {
  return async dispatch => {
    try {
      const level = await AsyncStorage.getItem('level');
      const score = await AsyncStorage.getItem('score');
      const difficulty = await AsyncStorage.getItem('difficulty');

      if (level === null || score === null || difficulty == null) {
        await AsyncStorage.setItem('level', '0');
        await AsyncStorage.setItem('score', '0');
        await AsyncStorage.setItem('difficulty', 'easy');
      }

      dispatch({
        type: SET_USER_DATA,
        payload: {
          level: level,
          score: score,
          difficulty: difficulty
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};