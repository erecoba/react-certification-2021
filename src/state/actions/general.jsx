import * as types from '../types';

export const changeDarkTheme = () => {
  return {
    payload: { theme: 'dark' },
    type: types.GENERAL_CHANGE_THEME_DARK,
  };
};

export const changeLightTheme = () => {
  return {
    payload: { theme: 'light' },
    type: types.GENERAL_CHANGE_THEME_LIGHT,
  };
};

export const setSearching = (searching) => {
  return {
    payload: { searching },
    type: types.GENERAL_CHANGE_SEARCH,
  };
};
