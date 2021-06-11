import { renderHook } from '@testing-library/react-hooks'
import { useGeneral } from './provider';

describe('general provider', () => {
  describe('useGeneral', () => {
    it('should throw error when no context provided', () => {
      const { result } = renderHook(() => useGeneral())
      expect(() => {
        result.current
      }).toThrowError('GeneralContext is not wrapped with GeneralContext.Provider');
    });
  });
});
