import generalReducer, { initialState } from './general';
import * as types from '../../types';

describe('State - Reducer - General', () => {
  it('should execute GENERAL_CHANGE_SEARCH case', () => {
    const action = {
      type: types.GENERAL_CHANGE_SEARCH,
      payload: {
        searching: 'minecraft',
      },
    };
    const state = generalReducer(initialState, action);

    expect(state.searching).toBe('minecraft');
  });

  it('should execute GENERAL_CHANGE_THEME_DARK case', () => {
    const action = {
      type: types.GENERAL_CHANGE_THEME_DARK,
      payload: {
        theme: 'dark',
      },
    };
    const state = generalReducer(initialState, action);

    expect(state.theme).toBe('dark');
  });

  it('should execute GENERAL_CHANGE_THEME_LIGHT case', () => {
    const action = {
      type: types.GENERAL_CHANGE_THEME_LIGHT,
      payload: {
        theme: 'light',
      },
    };
    const state = generalReducer(initialState, action);

    expect(state.theme).toBe('light');
  });
});
