import React from 'react';
import { fireEvent, act } from '@testing-library/react-native';

import { getUser1 } from '../../../../test/entities';
import { render } from '../../../../test/render';
import { mockedRoute } from '../../../../test/setup';
import { AuthContext } from '../../../context/auth/provider';

import Router from './Router';

jest.useFakeTimers();

describe('Router', () => {
  const mockSignOut = jest.fn();
  it('should render SignIn', async () => {
    const { getAllByText } = render(
      <AuthContext.Provider value={{
        state: { isAuth: false, user: null, sessionChecked: false },
        signIn: jest.fn(),
        signOut: jest.fn(),
        recoverSession: jest.fn(),
      }}>
        <Router />
      </AuthContext.Provider>
    );
    expect(getAllByText('Sign In')).toHaveLength(2);
  });

  it('should render App routes', () => {
    mockedRoute.mockReturnValue({ name: 'Home' });
    const { getAllByText } = render(
      <AuthContext.Provider value={{
        state: { isAuth: true, user: getUser1(), sessionChecked: true },
        signIn: jest.fn(),
        signOut: jest.fn(),
        recoverSession: jest.fn(),
      }}>
        <Router />
      </AuthContext.Provider>
    );
    expect(getAllByText('Home')).toHaveLength(2);
  });

  it('should sign out', () => {
    mockedRoute.mockReturnValue({ name: 'Home' });
    const { getByText } = render(
      <AuthContext.Provider value={{
        state: { isAuth: true, user: getUser1(), sessionChecked: true },
        signIn: jest.fn(),
        signOut: mockSignOut,
        recoverSession: jest.fn(),
      }}>
        <Router />
      </AuthContext.Provider>
    );

    act(() => {
      fireEvent.press(getByText('Logout'));
    });

    expect(mockSignOut).toHaveBeenCalled();
  });
});
