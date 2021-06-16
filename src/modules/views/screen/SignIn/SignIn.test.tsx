import React from 'react';
import { act, fireEvent } from '@testing-library/react-native';

import { mockedRoute } from '../../../../test/setup';
import { render } from '../../../../test/render';
import { AuthContext } from '../../../context/auth/provider';

import SignIn from './SignIn';

describe('SignInScreen', () => {
  const mockSignIn = jest.fn();
  beforeEach(() => {
    mockedRoute.mockReturnValue('SignIn');
  });

  it('should render', () => {
    const { toJSON } = render(<SignIn />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should sign in', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{
        state: { isAuth: false, user: null, sessionChecked: false },
        signIn: mockSignIn,
        signOut: jest.fn(),
        recoverSession: jest.fn(),
      }}>
        <SignIn />
      </AuthContext.Provider>
    );

    act(() => {
      fireEvent.changeText(getByTestId('usernameInput'), 'username');
    });

    act(() => {
      fireEvent.changeText(getByTestId('passwordInput'), 'password');
    });

    act(() => {
      fireEvent.press(getByTestId('signInButton'));
    });

    expect(mockSignIn).toHaveBeenCalledWith( {"password": "password", "username": "username"});
  });
});
