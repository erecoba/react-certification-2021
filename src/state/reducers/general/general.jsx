import * as types from '../../types';

export const initialState = {
  theme: 'light',
  searching: '',
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GENERAL_CHANGE_SEARCH:
      return {
        ...state,
        searching: action.payload.searching,
      };
    case types.GENERAL_CHANGE_THEME_DARK:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case types.GENERAL_CHANGE_THEME_LIGHT:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};

export default generalReducer;
