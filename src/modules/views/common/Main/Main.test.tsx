import React from 'react';
import { getUser1 } from '../../../../test/entities';

import { render } from '../../../../test/render';
import { AuthContext } from '../../../context/auth/provider';

import Main from './Main';

jest.useFakeTimers();

describe('Main', () => {
  const mockRecoverSession = jest.fn();

  it('should recover session', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{
        state: { isAuth: false, user: null, sessionChecked: false },
        signIn: jest.fn(),
        signOut: jest.fn(),
        recoverSession: mockRecoverSession
      }}>
        <Main />
      </AuthContext.Provider>
    );
    expect(mockRecoverSession).toHaveBeenCalled();
    expect(getByTestId('loadingSession')).toBeTruthy();
  });

  it('should render routes', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{
        state: { isAuth: true, user: getUser1(), sessionChecked: true },
        signIn: jest.fn(),
        signOut: jest.fn(),
        recoverSession: mockRecoverSession
      }}>
        <Main />
      </AuthContext.Provider>
    );
    expect(getByTestId('appContainer')).toBeTruthy();
  });
});
