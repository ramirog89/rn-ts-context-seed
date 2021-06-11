import { renderHook } from '@testing-library/react-hooks'
import { useAuth } from './provider';

describe('auth provider', () => {
  describe('useAuth', () => {
    it('should throw error when no context provided', () => {
      const { result } = renderHook(() => useAuth())
      expect(() => {
        result.current
      }).toThrowError('AuthContext is not wrapped with AuthContext.Provider');
    });
  });
});
