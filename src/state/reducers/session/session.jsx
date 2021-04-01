import * as types from '../../types';

export const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case types.SESSION_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
