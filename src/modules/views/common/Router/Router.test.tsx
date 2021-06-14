import React from 'react';

import { getUser1 } from '../../../../test/entities';
import { render } from '../../../../test/render';
import { mockedRoute } from '../../../../test/setup';
import { AuthContext } from '../../../context/auth/provider';

import Router from './Router';

jest.useFakeTimers();

describe('Router', () => {
  it('should render SignIn', () => {
    const { toJSON } = render(
      <AuthContext.Provider value={{
        state: { isAuth: false, user: null, sessionChecked: false },
        signIn: jest.fn(),
        signOut: jest.fn(),
        recoverSession: jest.fn(),
      }}>
        <Router />
      </AuthContext.Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render App routes', () => {
    mockedRoute.mockReturnValue({ name: 'Home' });
    const { toJSON } = render(
      <AuthContext.Provider value={{
        state: { isAuth: true, user: getUser1(), sessionChecked: true },
        signIn: jest.fn(),
        signOut: jest.fn(),
        recoverSession: jest.fn(),
      }}>
        <Router />
      </AuthContext.Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
