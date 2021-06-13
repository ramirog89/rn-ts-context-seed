import React from 'react';
import { render } from '@testing-library/react-native'

import Home from './Home';

describe('HomeScreen', () => {
  it('should render', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
