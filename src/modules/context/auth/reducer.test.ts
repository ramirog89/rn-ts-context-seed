import { reducer } from './reducer';
import { ActionType } from './actions';
import { initialState } from './state';

import { getUser1 } from '../../../test/entities';

describe('auth reducer', () => {
  it('should return state without mutation when no switch case match', () => {
    expect(reducer(initialState, { type: null, payload: null })).toBe(initialState);
  });

  it('should return new state on todo ActionType.AUTH_SIGN_IN_SUCCESS', () => {
    expect(reducer(initialState, { type: ActionType.AUTH_SIGN_IN_SUCCESS, payload: { user: getUser1() } })).toEqual({
      ...initialState,
      isAuth: true,
      user: getUser1(),
      sessionChecked: true
    });
  });

  it('should return new state on todo ActionType.AUTH_SIGN_OUT', () => {
    expect(reducer(initialState, { type: ActionType.AUTH_SIGN_OUT, payload: {} })).toEqual({
      ...initialState,
      isAuth: false,
      user: null,
      sessionChecked: true
    });
  });
});
