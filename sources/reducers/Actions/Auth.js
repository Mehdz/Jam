export const SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN';
export const SET_USER_LOGGED_OUT = 'SET_USER_LOGGED_OUT';

export const setUserLoggedIn = () => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_USER_LOGGED_IN,
        payload: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setUserLoggedOut = () => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_USER_LOGGED_OUT,
        payload: false,
      });
    } catch (error) {
      console.error(error);
    }
  };
};