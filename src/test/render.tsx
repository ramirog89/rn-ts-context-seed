import React from 'react';
import { render } from '@testing-library/react-native';
import { ContextMock } from './ContextMock';

const customRender = (children: React.ReactNode) => {
  return render(
    <ContextMock>
      {children}
    </ContextMock>
  )
};

export { customRender as render };
