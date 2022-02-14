import AsyncStorage from '@react-native-async-storage/async-storage';

export const SET_USER_DIFFCULTY = 'SET_USER_DIFFCULTY';
export const SET_USER_SCORE = 'SET_USER_SCORE';
export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserDiffculty = (difficulty) => async dispatch => {
  try {
    await AsyncStorage.setItem('difficulty', difficulty);

    dispatch({
      type: SET_USER_DIFFCULTY,
      payload: difficulty
    });
  } catch (err) {
    console.error(err.response);
  }
};

export const setUserScore = (score) => async dispatch => {
  try {
    await AsyncStorage.setItem('score', score);

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
      const score = await AsyncStorage.getItem('score');
      const difficulty = await AsyncStorage.getItem('difficulty');

      if (score === null || difficulty == null) {
        await AsyncStorage.setItem('score', '0');
        await AsyncStorage.setItem('difficulty', '0');
      }

      dispatch({
        type: SET_USER_DATA,
        payload: {
          score: score,
          difficulty: difficulty
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};