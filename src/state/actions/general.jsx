import * as types from '../types';

export const changeTheme = (theme) => {
  return {
    payload: { theme },
    type: types.GENERAL_CHANGE_THEME,
  };
};

export const setSearching = (searching) => {
  return {
    payload: { searching },
    type: types.GENERAL_CHANGE_SEARCH,
  };
};
