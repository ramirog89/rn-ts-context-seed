import { renderHook } from '@testing-library/react-hooks'
import { useTodo } from './provider';

describe('todo provider', () => {
  describe('useTodo', () => {
    it('should throw error when no context provided', () => {
      const { result } = renderHook(() => useTodo())
      expect(() => {
        result.current
      }).toThrowError('TodoContext is not wrapped with TodoContext.Provider');
    });
  });
});
