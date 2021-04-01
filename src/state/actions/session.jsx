import * as types from '../types';

export const logIn = (user) => {
  return {
    payload: { user },
    type: types.SESSION_LOGIN,
  };
};

export const logOut = () => {
  return {
    type: types.SESSION_LOGOUT,
  };
};
