import React from 'react';
import { Button } from 'react-native';
import { renderHook } from '@testing-library/react-hooks'
import { act, fireEvent } from '@testing-library/react-native';

import { render } from '../../../test/render';
import { dependencies } from '../../../test/ContextMock';
import { useAuth } from './provider';

jest.mock('jwt-decode');

describe('auth provider', () => {
  describe('useAuth', () => {
    it('should throw error when no context provided', () => {
      const { result } = renderHook(() => useAuth())
      expect(() => {
        result.current
      }).toThrowError('AuthContext is not wrapped with AuthContext.Provider');
    });
  });

  describe('AuthProvider', () => {
    describe('signIn', () => {
      it('should success', async () => {
        const Children = () => {
          const { signIn } = useAuth();
          return (
            <Button title="signIn" testID="signInBtn" onPress={() => signIn({ username: 'test', password: 'test' })} />
          ); 
        };
        const { getByTestId } = render(<Children />);

        await act(async () => {
          await fireEvent.press(getByTestId('signInBtn'));
        });

        expect(dependencies.apiService.signIn).toHaveBeenCalledWith({ username: 'test', password: 'test' });
        expect(dependencies.storageService.set).toHaveBeenCalledWith('token', 'token-string');
      });
    });
  });
});
